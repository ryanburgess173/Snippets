#define _AMD64_
#include <wdm.h>

NTSTATUS DriverEntry(void* a, void* b) {
    // https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/wdm/nf-wdm-dbgprint
    DbgPrint("Hello from Ryan's Driver!");
    return STATUS_SUCCESS;
}