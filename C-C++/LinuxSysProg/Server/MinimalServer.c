/*
Make sure you first install the following:
sudo apt install manpages-dev
*/
/*
=============================================================
socket(7) man pages
NAME
       socket - Linux socket interface
SYNOPSIS
       #include <sys/socket.h>
       sockfd = socket(int socket_family, int socket_type, int protocol);
=============================================================
*/
#include <sys/socket.h>
#include <netinet/in.h>
#include <string.h>
#include <fcntl.h>
#include <sys/sendfile.h>
#include <unistd.h>
#include <sys/socket.h>

void main(){
	// defines new socket using default protocol of 0
	// uses AF_INET socket family and SOCK_STREAM socket type
	int s = socket(AF_INET, SOCK_STREAM, 0);
	
	/* From man pages for $ man sockaddr_in
	=============================================================
	   Internet domain sockets
       #include <netinet/in.h>

       struct sockaddr_in {
           sa_family_t     sin_family;     // AF_INET
           in_port_t       sin_port;       // Port number
           struct in_addr  sin_addr;       // IPv4 address
       };
    =============================================================
	*/
	struct sockaddr_in addr = {
		AF_INET,
		0x901f,
		0
	};

	// binds socket s to address addr (byVal)
	// with a sizeof whatever addr is in bytes
	bind(s, &addr, sizeof(addr));

	// socket s, 10 is the max connections
	listen(s, 10);

	int client_fd = accept(s, 0, 0);

	char buffer[256] = {0};

	// client socket
	recv(client_fd, buffer, 256, 0);

	// GET /file.html.....

	char* f = buffer + 5; // adds 5 bytes to buffer

	*strchr(f, ' ') = 0;

	/* From the man pages $ man 2 open
	NAME
       open, openat, creat - open and possibly create a file
	LIBRARY
	       Standard C library (libc, -lc)
	SYNOPSIS
	       #include <fcntl.h>
	...
	The  argument flags must include one of the following access modes:
		O_RDONLY, O_WRONLY, or O_RDWR.
    */
    int opened_fd = open(f, O_RDONLY);

    // sendfile will allow us to transfer data between file descriptors
    // aka sending data from file.html to the client socket client_fd
    // file.html is basically the opened_fd from above
    sendfile(client_fd, opened_fd, 0, 256);
    
    // close file and sockets
    close(opened_fd);
    close(client_fd);
    close(s);
}