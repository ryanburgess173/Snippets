Follow this:
https://learn.microsoft.com/en-us/windows-hardware/drivers/download-the-wdk

It'll ask you to install Visual Studio (I recommend community), the Windows SDK,
and the Windows Driver Kit.

To compile:
**********************************************************************
** Visual Studio 2019 Developer Command Prompt v16.11.42
** Copyright (c) 2021 Microsoft Corporation
**********************************************************************
[vcvarsall.bat] Environment initialized for: 'x64'

C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools>cd "\Users\Ryan Burgess"

C:\Users\Ryan Burgess>cd "source\repos\Snippets\C-C++\WindowsSysProg\SimpleDriver"

C:\Users\Ryan Burgess\source\repos\Snippets\C-C++\WindowsSysProg\SimpleDriver>cl driver.c "C:\Program Files (x86)\Windows Kits\10\Lib\10.0.26100.0\km\x64\ntoskrnl.lib" /I "C:\Program Files (x86)\Windows Kits\10\Include\10.0.26100.0\km" /link /subsystem:native /driver:wdm -entry:DriverEntry
Microsoft (R) C/C++ Optimizing Compiler Version 19.29.30157 for x64
Copyright (C) Microsoft Corporation.  All rights reserved.

driver.c
Microsoft (R) Incremental Linker Version 14.29.30157.0
Copyright (C) Microsoft Corporation.  All rights reserved.

/out:driver.exe
/subsystem:native
/driver:wdm
-entry:DriverEntry
driver.obj
"C:\Program Files (x86)\Windows Kits\10\Lib\10.0.26100.0\km\x64\ntoskrnl.lib"

C:\Users\Ryan Burgess\source\repos\Snippets\C-C++\WindowsSysProg\SimpleDriver>

You should now have a driver.exe file in the directory.
We need to convert it to a .sys file. Do it this way:

C:\Users\Ryan Burgess\source\repos\Snippets\C-C++\WindowsSysProg\SimpleDriver>ren driver.exe driver.sys

Now to load this driver, you'll need to restart Windows with the special boot option
to disable Driver Signfature Verification. I'm choosing not to do this as I'm using
my host OS and not a Virtual Machine. If you're curious, here's a good video on it:
https://www.youtube.com/watch?v=GTrekHE8A00&list=WL&index=3

Thanks!

Ryan Burgess