// https://learn.microsoft.com/en-us/windows/win32/dlls/dllmain

#include <Windows.h>
#include <stdio.h>

BOOL WINAPI DllMain(HINSTANCE h, DWORD reason, LPVOID reserved) {
    if(reason == DLL_PROCESS_ATTACH) {
        printf("Hello from Ryan's DLL");
    }

    return TRUE;
}