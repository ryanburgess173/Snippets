#include <windows.h>
#include <stdbool.h> // for true/false macros

static bool quit = false;

LRESULT CALLBACK WindowProcessMessage(HWND window_handle, UINT message, WPARAM wParam, LPARAM lParam);

// Win32 defines its own main function entrypoint
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR pCmdLine, int nCmdShow) {
    
    static WNDCLASS window_class = {0}; // holds info about the window

    // name is used to reference the above class:
    static const wchar_t window_class_name[] = L"My Window Class";
    window_class.lpszClassName = (PCSTR)window_class_name;

    // For handling events (windows calls it "messages"):
    window_class.lpfnWndProc = WindowProcessMessage;

    window_class.hInstance = hInstance;

    // Register our class:
    RegisterClass(&window_class);

    // Create a window based upon the registered class:
    HWND window_handle = CreateWindow((PCSTR)window_class_name, "Learn to Program Windows", WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, NULL, NULL, hInstance, NULL);

    if(window_handle == NULL) {
        return -1;
    }

    // nCmdShow tells us whether the window is launched with some specific settings,
    // such as maximized or minimized.
    ShowWindow(window_handle, nCmdShow);

    // global boolean variable used to exit our program loop
    while(!quit){
        static MSG message = {0};
        // check for next message and remove it from the queue
        while(PeekMessage(&message, NULL, 0, 0, PM_REMOVE)) {
            TranslateMessage(&message);
            DispatchMessage(&message); // passes message back to lpfnWndProc
            // aka now you're thrown into WindowProcessMessage function
        }

        // Do GUI/Application code here while it runs!
    }
    return 0;
}

LRESULT CALLBACK WindowProcessMessage(HWND window_handle, UINT message, WPARAM wParam, LPARAM lParam) {
    switch(message) {
        case WM_QUIT:
        case WM_DESTROY: {
            quit = true;
        } break;
        default: { // Message isn't handled, pass on to default msg handling function
            return DefWindowProc(window_handle, message, wParam, lParam);
        } break;
    }
    return 0;
}