#include <windows.h>

int main() {
    HDC screen = GetDC(NULL);
    HBRUSH backgroundColor = CreateSolidBrush(
        RGB(0,0,0)
    );
    HBRUSH dotColor = CreateSolidBrush(
        RGB(0,255,0)
    );
    int topLeftCornerX = 1700;
    int topLeftCornerY = 100;
    int bottomRightCornerX = 2500;
    int bottomRightCornerY = 700;

    int dotDiameter = 15;
    int dotXVelocity = 15;
    int dotYVelocity = 15;
    int dotPosX = topLeftCornerX;
    int dotPosY = topLeftCornerY;
    for(;;){
        dotPosX += dotXVelocity;
        dotPosY += dotYVelocity;
        if(dotPosX > bottomRightCornerX - dotDiameter || dotPosX < topLeftCornerX){
            dotXVelocity = -dotXVelocity;
        }
        if(dotPosY > bottomRightCornerY - dotDiameter || dotPosY < topLeftCornerY){
            dotYVelocity = -dotYVelocity;
        }
        SelectObject(screen, backgroundColor);
        Rectangle(
            screen, 
            topLeftCornerX, 
            topLeftCornerY,
            bottomRightCornerX, 
            bottomRightCornerY
        );
        SelectObject(screen, dotColor);
        Ellipse(
            screen,
            dotPosX,
            dotPosY,
            dotPosX + dotDiameter, 
            dotPosY + dotDiameter
        );
        Sleep(10);
    }
    return 0;
}