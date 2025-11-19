// https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya

#include <Windows.h>

void main() {
    LoadLibraryA("RyansDLL.dll");
}