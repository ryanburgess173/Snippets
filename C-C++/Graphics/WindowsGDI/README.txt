Windows GDI Documentation:
https://learn.microsoft.com/en-us/windows/win32/gdi/windows-gdi

Instead of running commands in your current bash terminal, open the Developer Command Prompt:

Press Windows key and search for "x64 Native Tools Command Prompt for VS 2022"
Navigate to your directory:
cd "C:\Users\Ryan Burgess\source\repos\Snippets\C-C++\Graphics\WindowsGDI"

Compile with:
cl draw.c /link Gdi32.lib User32.lib