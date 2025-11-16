#include <windows.h>

int main() {
    HDC screen = GetDC(NULL);
    HBRUSH redBrush = CreateSolidBrush(RGB(255, 0, 0));
    HBRUSH blueBrush = CreateSolidBrush(RGB(0, 0, 255));
    
    while(1){
        // Draw blue rectangle for 1 second
        SelectObject(screen, blueBrush);
        Rectangle(screen, 50, 50, 300, 300);
        Sleep(1000);
        
        // Draw red rectangle for 1 second
        SelectObject(screen, redBrush);
        Rectangle(screen, 50, 50, 300, 300);
        Sleep(1000);
    }
    return 0;
}