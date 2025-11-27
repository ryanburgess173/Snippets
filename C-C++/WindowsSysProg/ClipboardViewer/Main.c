/*
Uses:
https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-openclipboard
*/

#include <Windows.h>
#include <stdio.h>

int main(){
    if(!OpenClipboard(NULL)){
        return 1;
    }
    HANDLE data = GetClipboardData(CF_TEXT);
    if (data == NULL){
        CloseClipboard();
        return 1;
    }
    printf("Contents: %s\n", data);
    CloseClipboard();
    return 0;
}