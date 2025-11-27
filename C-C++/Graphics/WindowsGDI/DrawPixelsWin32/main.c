#include <windows.h>
#include <stdbool.h>
#include <stdint.h>

static bool quit = false;

struct {
    int width;
    int height;
    uint32_t *pixels;
} frame = {0};

LRESULT CALLBACK WindowProcessMessage(HWND, UINT, WPARAM, LPARAM);

#if RAND_MAX == 32767
#define Rand32() ((rand() << 16) + (rand() << 1) + (rand() & 1))
#else
#define Rand32() rand()
#endif

// tells GDI about our pixel format:
static BITMAPINFO frame_bitmap_info;

// encapsulate array model:
static HBITMAP frame_bitmap = 0;

// device context handle to point to the bitmap handle:
static HDC frame_device_context = 0;

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR pCmdLine, int nCmdShow) {
    const wchar_t window_class_name[] = L"My Window Class";
    static WNDCLASS window_class = { 0 };
    window_class.lpfnWndProc = WindowProcessMessage;
    window_class.hInstance = hInstance;
    window_class.lpszClassName = (PCSTR)window_class_name;
    RegisterClass(&window_class);

    frame_bitmap_info.bmiHeader.biSize = sizeof(frame_bitmap_info.bmiHeader);
    frame_bitmap_info.bmiHeader.biPlanes = 1;
    frame_bitmap_info.bmiHeader.biBitCount = 32; // bits per pixel
    frame_bitmap_info.bmiHeader.biCompression = BI_RGB; // compression type is uncompressed RGB
    frame_device_context = CreateCompatibleDC(0);

    static HWND window_handle;
    window_handle = CreateWindow((PCSTR)window_class_name, "Drawing Pixels", WS_OVERLAPPEDWINDOW | WS_VISIBLE,
        640, 300, 640, 480, NULL, NULL, hInstance, NULL);
    if(window_handle == NULL) { return -1; }

    while(!quit) {
        static MSG message = { 0 };
        while(PeekMessage(&message, NULL, 0, 0, PM_REMOVE)) { DispatchMessage(&message); }

        static unsigned int p = 0;
        frame.pixels[(p++)%(frame.width*frame.height)] = Rand32();
        frame.pixels[Rand32()%(frame.width*frame.height)] = 0;

        InvalidateRect(window_handle, NULL, FALSE);
        UpdateWindow(window_handle);
    }
    return 0;
}

LRESULT CALLBACK WindowProcessMessage(HWND window_handle, UINT message, WPARAM wParam, LPARAM lParam) {
    switch (message) {
        case WM_QUIT:
        case WM_DESTROY: {
            quit = true;
        } break;

        // all window drawing must occur inside the WM_PAINT message
        case WM_PAINT: {
            static PAINTSTRUCT paint;
            static HDC device_context;
            // enables window drawing (fills out paint structure, and gives us a device context for painting): 
            device_context = BeginPaint(window_handle, &paint);

            // will copy our pixel array data to the window in the specified rectangle:
            BitBlt(device_context,
                // 4 points defining rectangle we want to "paint" to
                paint.rcPaint.left, paint.rcPaint.top,
                paint.rcPaint.right - paint.rcPaint.left, paint.rcPaint.bottom - paint.rcPaint.top,
                frame_device_context,
                // top left to start copying from:
                paint.rcPaint.left, paint.rcPaint.top,
                // copy pixels over to the window:
                SRCCOPY);
            EndPaint(window_handle, &paint);
        } break;

        // executes when window is created and when the window is resized
        case WM_SIZE: {
            // get the width and height of the window
            frame_bitmap_info.bmiHeader.biWidth = LOWORD(lParam);
            frame_bitmap_info.bmiHeader.biHeight = HIWORD(lParam);

            // if the bitmap already exists, delete it
            if(frame_bitmap) {
                DeleteObject(frame_bitmap);
            }
            // create a new bitmap
            frame_bitmap = CreateDIBSection(NULL, &frame_bitmap_info, DIB_RGB_COLORS, &frame.pixels, 0, 0);
            SelectObject(frame_device_context, frame_bitmap);

            frame.width = LOWORD(lParam);
            frame.height = HIWORD(lParam);
        } break;

        default: {
            return DefWindowProc(window_handle, message, wParam, lParam);
        }
    }
    return 0;
}