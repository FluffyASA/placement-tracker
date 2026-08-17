export const learningTopics = [
  "OS",
  "Networks",
  "Fullstack",
  "ML",
  "AI",
  "SystemDesign",
  "DSA",
  "OOPs",
  "DBMS",
  "Java",
];

export const sampleLearningData = {
  flashcards: {
    OS: [
  {
    id: "os-1",
    question: "What is an Operating System?",
    answer:
      "An Operating System (OS) is system software that acts as an interface between applications/users and computer hardware. It manages resources such as CPU, memory, files, and I/O devices. Examples include Windows, Linux, macOS, Android, and Unix."
  },

  {
    id: "os-2",
    question: "What are the main functions of an Operating System?",
    answer:
      "The main functions are process management, memory management, file management, device/I/O management, security and protection, resource allocation, networking, and providing system calls and user interfaces."
  },

  {
    id: "os-3",
    question: "What is a kernel?",
    answer:
      "The kernel is the core part of an operating system that directly interacts with hardware. It manages CPU scheduling, memory, devices, processes, and system calls. Applications normally access hardware through the kernel rather than directly."
  },

  {
    id: "os-4",
    question: "What is the difference between kernel mode and user mode?",
    answer:
      "User mode is a restricted mode where normal applications execute and cannot directly access critical hardware resources. Kernel mode has privileged access to CPU instructions, memory, and hardware. This separation improves system security and stability."
  },

  {
    id: "os-5",
    question: "What is a process?",
    answer:
      "A process is a program that is currently executing. It has its own address space and execution state, including a program counter, CPU registers, stack, heap, and other resources."
  },

  {
    id: "os-6",
    question: "What is the difference between a program and a process?",
    answer:
      "A program is a passive set of instructions stored on disk, while a process is an active instance of that program running in memory. For example, Chrome.exe on disk is a program; each running Chrome instance is a process."
  },

  {
    id: "os-7",
    question: "What are the common states of a process?",
    answer:
      "The common process states are New, Ready, Running, Waiting/Blocked, and Terminated. A process moves between these states depending on CPU scheduling, I/O operations, and completion."
  },

  {
    id: "os-8",
    question: "What is a Process Control Block (PCB)?",
    answer:
      "A PCB is a data structure maintained by the OS for each process. It stores information such as process ID, process state, program counter, CPU registers, scheduling information, memory information, and I/O status."
  },

  {
    id: "os-9",
    question: "What is a thread?",
    answer:
      "A thread is the smallest unit of CPU execution within a process. Threads belonging to the same process share resources such as code, heap, and open files, while each thread has its own stack and CPU registers."
  },

  {
    id: "os-10",
    question: "What is the difference between a process and a thread?",
    answer:
      "Processes have separate address spaces and are relatively expensive to create and switch between. Threads within the same process share memory and resources, making them lighter and faster to create and switch. However, shared memory also introduces synchronization issues."
  },

  {
    id: "os-11",
    question: "What is a context switch?",
    answer:
      "A context switch occurs when the CPU stops executing one process or thread and starts executing another. The OS saves the current execution state and restores the saved state of the next process. Context switching introduces overhead because no useful application work is performed during the switch."
  },

  {
    id: "os-12",
    question: "What is a system call?",
    answer:
      "A system call is a mechanism through which a user-level program requests a service from the operating system kernel. Examples include read(), write(), fork(), exec(), open(), close(), and wait() in Unix-like systems."
  },

  {
    id: "os-13",
    question: "What is the difference between a system call and a normal function call?",
    answer:
      "A normal function call usually stays within the same privilege level, while a system call transfers execution from user mode to kernel mode to request an OS service. System calls therefore involve additional overhead and privilege checks."
  },

  {
    id: "os-14",
    question: "What is a process scheduler?",
    answer:
      "The process scheduler is an OS component that selects which ready process should receive the CPU next. Different scheduling algorithms such as FCFS, SJF, Round Robin, and Priority Scheduling use different selection strategies."
  },

  {
    id: "os-15",
    question: "What is CPU scheduling?",
    answer:
      "CPU scheduling is the process of deciding which ready process should be executed by the CPU. Its goals include maximizing CPU utilization and throughput while minimizing waiting time, turnaround time, and response time."
  },

  {
    id: "os-16",
    question: "What is FCFS scheduling?",
    answer:
      "First-Come, First-Served (FCFS) executes processes in the order they arrive. It is simple and normally non-preemptive. A major disadvantage is the convoy effect, where short processes wait behind a long process."
  },

  {
    id: "os-17",
    question: "What is Shortest Job First (SJF) scheduling?",
    answer:
      "SJF selects the process with the smallest expected CPU burst. It can minimize average waiting time when burst lengths are known accurately. SJF is generally non-preemptive."
  },

  {
    id: "os-18",
    question: "What is Shortest Remaining Time First (SRTF)?",
    answer:
      "SRTF is the preemptive version of SJF. The CPU runs the process with the shortest remaining execution time. If a new process arrives with a shorter remaining time, the current process can be preempted."
  },

  {
    id: "os-19",
    question: "What is Round Robin scheduling?",
    answer:
      "Round Robin is a preemptive scheduling algorithm where each process receives a fixed time quantum. After its quantum expires, the process is moved to the back of the ready queue if it has not finished. It is commonly used in time-sharing systems."
  },

  {
    id: "os-20",
    question: "What is Priority Scheduling?",
    answer:
      "Priority Scheduling selects the process with the highest priority for execution. It can be preemptive or non-preemptive. A major problem is starvation, where low-priority processes may wait indefinitely."
  },

  {
    id: "os-21",
    question: "What is starvation in Operating Systems?",
    answer:
      "Starvation occurs when a process waits indefinitely because other processes continuously receive the resources or CPU time it needs. For example, a low-priority process may never execute if higher-priority processes keep arriving."
  },

  {
    id: "os-22",
    question: "What is aging in CPU scheduling?",
    answer:
      "Aging is a technique used to prevent starvation. The priority of a process is gradually increased the longer it waits, eventually allowing even low-priority processes to receive CPU time."
  },

  {
    id: "os-23",
    question: "What is turnaround time, waiting time, and response time?",
    answer:
      "Turnaround time = Completion Time − Arrival Time. Waiting time is the total time spent waiting in the ready queue. Response time = First CPU Start Time − Arrival Time. These metrics are commonly used to evaluate CPU scheduling algorithms."
  },

  {
    id: "os-24",
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    answer:
      "In preemptive scheduling, the OS can interrupt a running process and give the CPU to another process. In non-preemptive scheduling, a process keeps the CPU until it finishes, blocks for I/O, or voluntarily releases it. Round Robin is preemptive, while basic FCFS is non-preemptive."
  },

  {
    id: "os-25",
    question: "What is a critical section?",
    answer:
      "A critical section is a portion of code that accesses shared data or resources and must not be executed by multiple threads simultaneously. For example, updating a shared bank balance should be protected to avoid inconsistent results."
  },

  {
    id: "os-26",
    question: "What is a race condition?",
    answer:
      "A race condition occurs when multiple threads or processes access shared data concurrently and the final result depends on the timing of their execution. For example, two threads incrementing the same counter without synchronization may produce an incorrect value."
  },

  {
    id: "os-27",
    question: "What is a mutex?",
    answer:
      "A mutex is a synchronization mechanism that provides mutual exclusion. Only one thread can hold the mutex at a time, allowing it to safely execute a critical section while other threads wait."
  },

  {
    id: "os-28",
    question: "What is a semaphore?",
    answer:
      "A semaphore is a synchronization primitive represented by a counter. A binary semaphore can control access to a single resource, while a counting semaphore can manage multiple identical resources. Semaphores use operations such as wait/P and signal/V."
  },

  {
    id: "os-29",
    question: "What is the difference between a mutex and a semaphore?",
    answer:
      "A mutex is primarily used for mutual exclusion and has ownership: the thread that locks it is normally responsible for unlocking it. A semaphore is a signaling/counting mechanism and does not have the same ownership concept. A counting semaphore can allow multiple threads to access a limited number of resources."
  },

  {
    id: "os-30",
    question: "What is a monitor in Operating Systems?",
    answer:
      "A monitor is a high-level synchronization construct that combines shared data, procedures, and synchronization into one structure. Only one thread can execute inside a monitor at a time. Condition variables can be used to make threads wait for specific conditions."
  },

  {
    id: "os-31",
    question: "What is deadlock?",
    answer:
      "Deadlock is a situation where two or more processes are permanently blocked because each is waiting for a resource held by another process. For example, Process A holds Resource 1 and waits for Resource 2, while Process B holds Resource 2 and waits for Resource 1."
  },

  {
    id: "os-32",
    question: "What are the four necessary conditions for deadlock?",
    answer:
      "The four Coffman conditions are: 1) Mutual Exclusion, 2) Hold and Wait, 3) No Preemption, and 4) Circular Wait. Deadlock can occur only when all four conditions exist simultaneously."
  },

  {
    id: "os-33",
    question: "What is deadlock prevention?",
    answer:
      "Deadlock prevention ensures that at least one of the four necessary deadlock conditions can never occur. For example, requiring a process to request all resources at once can eliminate Hold and Wait."
  },

  {
    id: "os-34",
    question: "What is deadlock avoidance?",
    answer:
      "Deadlock avoidance dynamically examines resource allocation requests and grants them only if the resulting system remains in a safe state. The Banker's Algorithm is a classic deadlock avoidance algorithm."
  },

  {
    id: "os-35",
    question: "What is the Banker's Algorithm?",
    answer:
      "The Banker's Algorithm is a deadlock avoidance algorithm. Before granting a resource request, it checks whether the system will remain in a safe state. If granting the request could lead to an unsafe state, the request is delayed."
  },

  {
    id: "os-36",
    question: "What is the difference between deadlock prevention, avoidance, and detection?",
    answer:
      "Prevention structurally prevents at least one deadlock condition. Avoidance makes allocation decisions based on whether the system remains safe. Detection allows deadlocks to occur and periodically checks for them so the OS can recover."
  },

  {
    id: "os-37",
    question: "What is memory management?",
    answer:
      "Memory management is the OS function responsible for allocating and deallocating RAM, tracking which memory is being used, protecting process address spaces, and supporting techniques such as paging and virtual memory."
  },

  {
    id: "os-38",
    question: "What is virtual memory?",
    answer:
      "Virtual memory allows processes to use a logical address space larger than available physical RAM. The OS can keep inactive pages on disk and load them into RAM when needed. It also provides process isolation and efficient memory utilization."
  },

  {
    id: "os-39",
    question: "What is paging?",
    answer:
      "Paging divides a process's logical memory into fixed-size pages and physical memory into fixed-size frames. Pages can be placed into any available frames, eliminating external fragmentation."
  },

  {
    id: "os-40",
    question: "What is a page table?",
    answer:
      "A page table maps virtual page numbers to physical frame numbers. When a process accesses a virtual address, the OS/MMU uses the page table to determine the corresponding physical memory location."
  },

  {
    id: "os-41",
    question: "What is a TLB?",
    answer:
      "A Translation Lookaside Buffer (TLB) is a small, fast cache that stores recent virtual-to-physical address translations. A TLB hit avoids accessing the page table in memory and therefore speeds up address translation."
  },

  {
    id: "os-42",
    question: "What is a page fault?",
    answer:
      "A page fault occurs when a process accesses a virtual page that is not currently present in physical RAM. The OS pauses the process, loads the required page from disk into a free frame, updates the page table, and resumes execution."
  },

  {
    id: "os-43",
    question: "What is demand paging?",
    answer:
      "Demand paging loads a page into physical memory only when the process actually accesses it. This reduces unnecessary memory usage and allows programs larger than physical RAM to execute."
  },

  {
    id: "os-44",
    question: "What is thrashing?",
    answer:
      "Thrashing occurs when the system spends most of its time handling page faults and swapping pages between RAM and disk instead of executing useful work. It usually occurs when processes do not have enough physical frames."
  },

  {
    id: "os-45",
    question: "What are common page replacement algorithms?",
    answer:
      "Common page replacement algorithms include FIFO, LRU, Optimal, and Clock. They decide which page should be removed from memory when a new page needs to be loaded and no free frame is available."
  },

  {
    id: "os-46",
    question: "What is the difference between paging and segmentation?",
    answer:
      "Paging divides memory into fixed-size pages and frames, while segmentation divides a program into variable-sized logical segments such as code, data, and stack. Paging mainly helps physical memory management, while segmentation reflects the logical structure of a program."
  },

  {
    id: "os-47",
    question: "What is fragmentation? Explain internal and external fragmentation.",
    answer:
      "Fragmentation is wasted memory space. Internal fragmentation occurs when allocated memory contains unused space inside the allocated block. External fragmentation occurs when free memory is split into small non-contiguous blocks. Paging largely eliminates external fragmentation but can still have internal fragmentation."
  },

  {
    id: "os-48",
    question: "What is IPC (Inter-Process Communication)?",
    answer:
      "IPC allows processes to communicate and synchronize with each other. Common IPC mechanisms include shared memory, pipes, message queues, sockets, signals, and semaphores. For example, a producer process can send data to a consumer process through a pipe."
  },

  {
    id: "os-49",
    question: "What is the difference between shared memory and message passing?",
    answer:
      "Shared memory allows processes to communicate by accessing a common memory region, making it fast but requiring synchronization. Message passing allows processes to exchange messages through OS-managed mechanisms and is generally easier to isolate but may involve more overhead."
  },

  {
    id: "os-50",
    question: "What is the difference between a hard link and a soft link in Linux?",
    answer:
      "A hard link points directly to the same inode/data as the original file, so both names refer to the same underlying file. A soft link (symbolic link) stores a path to another file. If the original file is deleted, a soft link can become broken, while a hard link can still access the data as long as at least one hard link exists."
  }
],
   Networks: [
  {
    id: "net-1",
    question: "What is a computer network?",
    answer:
      "A computer network is a collection of interconnected devices that communicate and share resources using communication protocols. Examples include LANs, WANs, the Internet, and corporate networks."
  },

  {
    id: "net-2",
    question: "What are the main types of computer networks?",
    answer:
      "Common types include PAN (Personal Area Network), LAN (Local Area Network), MAN (Metropolitan Area Network), and WAN (Wide Area Network). LAN covers a small area such as a building, while WAN can span countries or continents."
  },

  {
    id: "net-3",
    question: "What is the OSI model?",
    answer:
      "The OSI (Open Systems Interconnection) model is a 7-layer conceptual model for understanding network communication. The layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application."
  },

  {
    id: "net-4",
    question: "What are the seven layers of the OSI model?",
    answer:
      "From bottom to top: Physical, Data Link, Network, Transport, Session, Presentation, and Application. A common mnemonic is 'Please Do Not Throw Sausage Pizza Away.'"
  },

  {
    id: "net-5",
    question: "What is the TCP/IP model?",
    answer:
      "The TCP/IP model is the practical networking model used by the Internet. It is commonly represented using four layers: Link/Network Access, Internet, Transport, and Application."
  },

  {
    id: "net-6",
    question: "What is the difference between the OSI and TCP/IP models?",
    answer:
      "OSI is a 7-layer reference model, while TCP/IP is a practical protocol suite commonly represented using 4 layers. OSI separates Session and Presentation layers, whereas TCP/IP generally combines their responsibilities into the Application layer."
  },

  {
    id: "net-7",
    question: "What is a protocol?",
    answer:
      "A protocol is a set of rules that defines how devices communicate and exchange data. Examples include HTTP, TCP, UDP, DNS, DHCP, FTP, and SMTP."
  },

  {
    id: "net-8",
    question: "What is an IP address?",
    answer:
      "An IP address is a logical address assigned to a device or network interface so it can be identified and reached on an IP network. IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses."
  },

  {
    id: "net-9",
    question: "What is the difference between IPv4 and IPv6?",
    answer:
      "IPv4 uses 32-bit addresses such as 192.168.1.10, allowing about 4.3 billion addresses. IPv6 uses 128-bit addresses such as 2001:db8::1, providing a vastly larger address space and additional improvements such as simpler header processing."
  },

  {
    id: "net-10",
    question: "What is a MAC address?",
    answer:
      "A MAC (Media Access Control) address is a hardware-level address associated with a network interface. Ethernet MAC addresses are typically 48 bits and are represented in hexadecimal, such as 00:1A:2B:3C:4D:5E."
  },

  {
    id: "net-11",
    question: "What is the difference between an IP address and a MAC address?",
    answer:
      "An IP address is a logical address used for communication across networks and can change depending on the network. A MAC address identifies a network interface at the Data Link layer and is normally associated with the hardware interface."
  },

  {
    id: "net-12",
    question: "What is a private IP address?",
    answer:
      "Private IP addresses are used inside local networks and are not directly routable on the public Internet. Common IPv4 private ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."
  },

  {
    id: "net-13",
    question: "What is NAT?",
    answer:
      "NAT (Network Address Translation) translates private IP addresses into public IP addresses and vice versa. It allows many devices in a private network to share one public IPv4 address when accessing the Internet."
  },

  {
    id: "net-14",
    question: "What is a subnet mask?",
    answer:
      "A subnet mask determines which portion of an IPv4 address represents the network and which portion represents the host. For example, 255.255.255.0 corresponds to /24, leaving 8 bits for host addresses."
  },

  {
    id: "net-15",
    question: "What is subnetting?",
    answer:
      "Subnetting divides a larger IP network into smaller logical networks called subnets. It improves address utilization, organization, security, and routing efficiency."
  },

  {
    id: "net-16",
    question: "What is CIDR?",
    answer:
      "CIDR (Classless Inter-Domain Routing) represents IP networks using a prefix length, such as 192.168.1.0/24. It replaced traditional class-based addressing and allows more flexible allocation of IP address ranges."
  },

  {
    id: "net-17",
    question: "What is a default gateway?",
    answer:
      "A default gateway is the router or network device that a host sends packets to when the destination is outside its local network. For example, a home router commonly acts as the default gateway."
  },

  {
    id: "net-18",
    question: "What is ARP?",
    answer:
      "ARP (Address Resolution Protocol) maps an IPv4 address to the corresponding MAC address on a local network. A host can broadcast an ARP request asking which device owns a particular IP address."
  },

  {
    id: "net-19",
    question: "What is DNS?",
    answer:
      "DNS (Domain Name System) translates human-readable domain names such as example.com into IP addresses that computers use for communication. It is essentially a distributed naming system for the Internet."
  },

  {
    id: "net-20",
    question: "What happens when you enter a URL into a browser?",
    answer:
      "Typically, the browser checks caches, performs DNS resolution if necessary, establishes a connection to the server, performs TLS negotiation for HTTPS, sends an HTTP request, receives the response, and renders the content. The exact sequence can vary because of caching, connection reuse, and browser optimizations."
  },

  {
    id: "net-21",
    question: "What is DHCP?",
    answer:
      "DHCP (Dynamic Host Configuration Protocol) automatically provides devices with network configuration such as IP address, subnet mask, default gateway, and DNS server. A common DHCP process is DORA: Discover, Offer, Request, Acknowledgment."
  },

  {
    id: "net-22",
    question: "What is the difference between a hub, switch, and router?",
    answer:
      "A hub broadcasts incoming data to all connected devices. A switch forwards frames based on MAC addresses within a local network. A router forwards packets between different IP networks."
  },

  {
    id: "net-23",
    question: "At which OSI layer does a switch operate?",
    answer:
      "A traditional Ethernet switch primarily operates at the Data Link layer (Layer 2) and forwards frames using MAC addresses. Some multilayer switches can also perform Layer 3 routing."
  },

  {
    id: "net-24",
    question: "At which OSI layer does a router operate?",
    answer:
      "A router primarily operates at the Network layer (Layer 3). It forwards IP packets between different networks using routing tables."
  },

  {
    id: "net-25",
    question: "What is TCP?",
    answer:
      "TCP (Transmission Control Protocol) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of data. It uses acknowledgments, retransmissions, sequence numbers, and flow/congestion control."
  },

  {
    id: "net-26",
    question: "What is UDP?",
    answer:
      "UDP (User Datagram Protocol) is a connectionless transport-layer protocol with low overhead. It does not guarantee delivery, ordering, or retransmission, making it useful for applications where speed and low latency are more important than guaranteed delivery."
  },

  {
    id: "net-27",
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP provides reliable, ordered delivery and connection management, but has more overhead. UDP is connectionless with lower overhead and latency but provides no built-in guarantee of delivery or ordering. Video streaming, DNS, and online gaming may use UDP, while HTTP/1.1 and HTTP/2 commonly use TCP."
  },

  {
    id: "net-28",
    question: "What is the TCP three-way handshake?",
    answer:
      "The TCP three-way handshake establishes a connection using SYN, SYN-ACK, and ACK. The client sends SYN, the server responds with SYN-ACK, and the client sends ACK. This synchronizes sequence numbers and establishes the connection."
  },

  {
    id: "net-29",
    question: "Why does TCP need a three-way handshake?",
    answer:
      "The handshake allows both endpoints to confirm that they can communicate and synchronize their initial sequence numbers. It helps establish the state required for reliable bidirectional communication."
  },

  {
    id: "net-30",
    question: "How does TCP terminate a connection?",
    answer:
      "TCP normally uses a four-segment termination process involving FIN and ACK messages. One side sends FIN, the other acknowledges it, and eventually sends its own FIN, which is acknowledged by the first side. This allows both directions to close independently."
  },

  {
    id: "net-31",
    question: "What is TCP flow control?",
    answer:
      "Flow control prevents a sender from overwhelming a receiver. TCP uses a receive window advertised by the receiver to indicate how much additional data it can accept."
  },

  {
    id: "net-32",
    question: "What is TCP congestion control?",
    answer:
      "Congestion control prevents the sender from overwhelming the network. TCP adjusts its sending rate based on network conditions using mechanisms such as slow start, congestion avoidance, fast retransmit, and fast recovery."
  },

  {
    id: "net-33",
    question: "What is the difference between flow control and congestion control?",
    answer:
      "Flow control protects the receiver from receiving data faster than it can process. Congestion control protects the network from becoming overloaded. Flow control is primarily receiver-focused, while congestion control is network-focused."
  },

  {
    id: "net-34",
    question: "What is a port number?",
    answer:
      "A port number identifies a specific application or service on a host. Together with an IP address and transport protocol, it helps identify a network endpoint. For example, HTTPS commonly uses TCP port 443."
  },

  {
    id: "net-35",
    question: "What is a socket?",
    answer:
      "A socket is an endpoint for network communication. A TCP connection can be identified by the combination of source IP, source port, destination IP, destination port, and protocol."
  },

  {
    id: "net-36",
    question: "What are some important well-known port numbers?",
    answer:
      "Common examples include HTTP 80, HTTPS 443, DNS 53, SSH 22, FTP 21, SMTP 25, DHCP 67/68, and POP3 110. Memorizing frequently used ports is useful for networking interviews and OAs."
  },

  {
    id: "net-37",
    question: "What is HTTP?",
    answer:
      "HTTP (HyperText Transfer Protocol) is an application-layer protocol used for communication between clients and servers. It follows a request-response model and supports methods such as GET, POST, PUT, PATCH, and DELETE."
  },

  {
    id: "net-38",
    question: "What is HTTPS?",
    answer:
      "HTTPS is HTTP transmitted over a secure TLS connection. TLS provides encryption, authentication of the server, and integrity protection for data exchanged between the client and server."
  },

  {
    id: "net-39",
    question: "What is the difference between HTTP and HTTPS?",
    answer:
      "HTTP sends application data without TLS protection, while HTTPS uses TLS to encrypt and protect communication. HTTPS also helps authenticate the server using digital certificates."
  },

  {
    id: "net-40",
    question: "What are HTTP status code categories?",
    answer:
      "HTTP status codes are grouped into 1xx informational, 2xx successful, 3xx redirection, 4xx client errors, and 5xx server errors. Common examples are 200 OK, 301/302 redirects, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 500 Internal Server Error."
  },

  {
    id: "net-41",
    question: "What is the difference between GET and POST?",
    answer:
      "GET is generally used to retrieve a resource and its parameters are commonly included in the URL. POST is generally used to submit data for processing or create a resource, with the data typically included in the request body. GET requests are intended to be safe and are commonly cacheable."
  },

  {
    id: "net-42",
    question: "What is a CDN?",
    answer:
      "A CDN (Content Delivery Network) is a distributed network of servers that caches and serves content closer to users. For example, an image requested by a user in India may be served from a nearby CDN edge server instead of the origin server located far away."
  },

  {
    id: "net-43",
    question: "What is latency and what is bandwidth?",
    answer:
      "Latency is the time required for data to travel between endpoints or for a request to receive a response. Bandwidth is the maximum amount of data that can be transmitted over a connection per unit of time. A network can have high bandwidth but still have high latency."
  },

  {
    id: "net-44",
    question: "What is packet switching?",
    answer:
      "Packet switching divides data into smaller packets that can travel independently through a network and be reassembled at the destination. The Internet primarily uses packet switching because it efficiently shares network resources among many users."
  },

  {
    id: "net-45",
    question: "What is the difference between circuit switching and packet switching?",
    answer:
      "Circuit switching establishes a dedicated communication path for the duration of a connection, while packet switching shares network resources among multiple connections. Traditional telephone networks used circuit switching, while the Internet uses packet switching."
  },

  {
    id: "net-46",
    question: "What is routing?",
    answer:
      "Routing is the process of determining a path for packets to travel from a source network to a destination network. Routers use routing tables and routing protocols to make forwarding decisions."
  },

  {
    id: "net-47",
    question: "What is the difference between static and dynamic routing?",
    answer:
      "Static routing uses manually configured routes and does not automatically adapt to topology changes. Dynamic routing uses routing protocols to automatically learn and update routes based on network conditions."
  },

  {
    id: "net-48",
    question: "What is a firewall?",
    answer:
      "A firewall is a security mechanism that monitors and controls network traffic according to defined rules. It can allow or block traffic based on factors such as IP addresses, ports, protocols, and connection state."
  },

  {
    id: "net-49",
    question: "What is the difference between unicast, broadcast, and multicast?",
    answer:
      "Unicast sends data from one sender to one receiver. Broadcast sends data from one sender to all devices in a broadcast domain. Multicast sends data from one sender to a specific group of interested receivers."
  },

  {
    id: "net-50",
    question: "What is the difference between symmetric and asymmetric encryption in networking?",
    answer:
      "Symmetric encryption uses the same secret key for encryption and decryption and is generally faster. Asymmetric encryption uses a public/private key pair and is useful for authentication and secure key exchange. HTTPS uses asymmetric cryptography during parts of TLS establishment and symmetric encryption for efficient bulk data transfer."
  }
],
   ML: [
  {
    id: "ml-1",
    question: "What is Machine Learning?",
    answer:
      "Machine Learning is a field of AI where algorithms learn patterns from data and use those patterns to make predictions or decisions without being explicitly programmed for every case. For example, a model can learn from previous house prices to predict the price of a new house."
  },

  {
    id: "ml-2",
    question: "What are the main types of Machine Learning?",
    answer:
      "The three major types are supervised learning, unsupervised learning, and reinforcement learning. Supervised learning uses labeled data, unsupervised learning finds patterns in unlabeled data, and reinforcement learning learns through rewards and penalties."
  },

  {
    id: "ml-3",
    question: "What is supervised learning?",
    answer:
      "Supervised learning trains a model using input-output pairs where the desired output is known. The model learns a mapping from features to a target. Examples include predicting house prices and classifying emails as spam or not spam."
  },

  {
    id: "ml-4",
    question: "What is unsupervised learning?",
    answer:
      "Unsupervised learning works with data that does not have labeled target values. The algorithm attempts to discover hidden patterns or structures. Common examples include clustering customers using K-Means and dimensionality reduction using PCA."
  },

  {
    id: "ml-5",
    question: "What is reinforcement learning?",
    answer:
      "Reinforcement learning involves an agent interacting with an environment and learning actions through rewards and penalties. The goal is to learn a policy that maximizes cumulative reward. Game-playing AI and robotics are common applications."
  },

  {
    id: "ml-6",
    question: "What is the difference between classification and regression?",
    answer:
      "Classification predicts discrete categories, while regression predicts continuous numerical values. For example, predicting whether an email is spam is classification, while predicting the price of a house is regression."
  },

  {
    id: "ml-7",
    question: "What are features and labels in Machine Learning?",
    answer:
      "Features are the input variables used by a model to make predictions. A label or target is the output the model is trying to predict. For example, when predicting house prices, area, number of rooms, and location can be features while price is the label."
  },

  {
    id: "ml-8",
    question: "What is a training set, validation set, and test set?",
    answer:
      "The training set is used to learn model parameters. The validation set is used to tune hyperparameters and compare models. The test set is kept separate until the end to estimate how well the final model generalizes to unseen data."
  },

  {
    id: "ml-9",
    question: "Why do we split data into training and testing sets?",
    answer:
      "The split allows us to evaluate whether a model generalizes to unseen data. If we evaluate on the same data used for training, a model may appear highly accurate simply because it memorized the training examples."
  },

  {
    id: "ml-10",
    question: "What is overfitting?",
    answer:
      "Overfitting occurs when a model learns the training data too closely, including noise and irrelevant patterns, resulting in poor performance on unseen data. A common symptom is very high training accuracy but significantly lower validation or test accuracy."
  },

  {
    id: "ml-11",
    question: "What is underfitting?",
    answer:
      "Underfitting occurs when a model is too simple to capture the important patterns in the data. It performs poorly on both training and test data. Increasing model complexity or improving the features can sometimes reduce underfitting."
  },

  {
    id: "ml-12",
    question: "What is the bias-variance tradeoff?",
    answer:
      "Bias represents error caused by overly simplistic assumptions, while variance represents sensitivity to the training data. High bias can cause underfitting, while high variance can cause overfitting. Good models aim for a balance between the two."
  },

  {
    id: "ml-13",
    question: "What is cross-validation?",
    answer:
      "Cross-validation evaluates a model by splitting the training data into multiple folds. In k-fold cross-validation, the model is trained on k-1 folds and validated on the remaining fold, repeating this process k times. The results are then averaged."
  },

  {
    id: "ml-14",
    question: "What is k-fold cross-validation?",
    answer:
      "In k-fold cross-validation, the dataset is divided into k roughly equal parts. The model is trained k times, using a different fold as validation data each time. For example, in 5-fold cross-validation, each sample is used for validation once."
  },

  {
    id: "ml-15",
    question: "What is data preprocessing?",
    answer:
      "Data preprocessing prepares raw data for Machine Learning. Common steps include handling missing values, removing duplicates, encoding categorical variables, scaling numerical features, handling outliers, and splitting the dataset."
  },

  {
    id: "ml-16",
    question: "How can missing values be handled?",
    answer:
      "Missing values can be removed when appropriate or imputed using methods such as mean, median, mode, forward filling, or model-based imputation. The best approach depends on the data and why values are missing."
  },

  {
    id: "ml-17",
    question: "Why is feature scaling important?",
    answer:
      "Feature scaling puts numerical features on comparable scales. This is particularly important for algorithms such as KNN, K-Means, SVM, and gradient-based models because large-scale features can otherwise dominate the calculations."
  },

  {
    id: "ml-18",
    question: "What is normalization?",
    answer:
      "Normalization commonly scales values to a fixed range, often 0 to 1. Min-Max scaling is a common technique: x' = (x - min(x)) / (max(x) - min(x))."
  },

  {
    id: "ml-19",
    question: "What is standardization?",
    answer:
      "Standardization transforms a feature so that it has approximately zero mean and unit variance. The common formula is z = (x - mean) / standard deviation. It is often useful for algorithms sensitive to feature scale."
  },

  {
    id: "ml-20",
    question: "What is one-hot encoding?",
    answer:
      "One-hot encoding converts categorical values into separate binary features. For example, a Color feature with Red, Blue, and Green can become Color_Red, Color_Blue, and Color_Green."
  },

  {
    id: "ml-21",
    question: "What is label encoding?",
    answer:
      "Label encoding assigns numerical values to categories, such as Red=0, Blue=1, and Green=2. It is appropriate in some situations, especially ordinal categories, but arbitrary numerical ordering can be misleading for nominal categories."
  },

  {
    id: "ml-22",
    question: "What is linear regression?",
    answer:
      "Linear regression models the relationship between input features and a continuous target using a linear equation. For one feature, it can be written as y = mx + c. The model learns parameters that minimize an error measure such as Mean Squared Error."
  },

  {
    id: "ml-23",
    question: "What is logistic regression?",
    answer:
      "Logistic regression is primarily used for classification. It applies the sigmoid function to a linear combination of features to produce a probability between 0 and 1. A threshold can then be used to assign a class."
  },

  {
    id: "ml-24",
    question: "Why is logistic regression called regression if it is used for classification?",
    answer:
      "Logistic regression models a continuous probability using a regression-like linear function, but the resulting probability is converted into a class. For binary classification, the sigmoid function maps the linear output to the range 0 to 1."
  },

  {
    id: "ml-25",
    question: "What is the sigmoid function?",
    answer:
      "The sigmoid function is σ(z) = 1 / (1 + e^-z). It maps any real-valued input to a value between 0 and 1, making it useful for representing probabilities in binary classification."
  },

  {
    id: "ml-26",
    question: "What is a decision tree?",
    answer:
      "A decision tree is a supervised learning model that makes predictions by repeatedly splitting data according to feature-based conditions. Internal nodes represent decisions, branches represent outcomes, and leaf nodes represent predictions."
  },

  {
    id: "ml-27",
    question: "How does a decision tree choose a split?",
    answer:
      "A decision tree chooses splits that improve the purity of the resulting groups. Common criteria include Gini impurity, entropy/information gain for classification, and variance or squared-error reduction for regression."
  },

  {
    id: "ml-28",
    question: "What is entropy in Machine Learning?",
    answer:
      "Entropy measures the impurity or uncertainty in a classification dataset. For binary classification, entropy is H(S) = -p1 log2(p1) - p2 log2(p2). Lower entropy means the data is more pure."
  },

  {
    id: "ml-29",
    question: "What is information gain?",
    answer:
      "Information gain measures how much uncertainty is reduced after splitting a dataset. It is calculated as the entropy before the split minus the weighted entropy after the split. Decision trees can choose the split with the highest information gain."
  },

  {
    id: "ml-30",
    question: "What is a Random Forest?",
    answer:
      "Random Forest is an ensemble of decision trees. Each tree is trained using a randomized sample of the data and a randomized subset of features. For classification, trees typically vote on the final class; for regression, predictions can be averaged."
  },

  {
    id: "ml-31",
    question: "Why does Random Forest usually perform better than a single decision tree?",
    answer:
      "A single decision tree can have high variance and overfit the training data. Random Forest combines many diverse trees and aggregates their predictions, which generally reduces variance and improves generalization."
  },

  {
    id: "ml-32",
    question: "What is ensemble learning?",
    answer:
      "Ensemble learning combines predictions from multiple models to produce a stronger final model. Common techniques include bagging, boosting, voting, stacking, and Random Forests."
  },

  {
    id: "ml-33",
    question: "What is bagging?",
    answer:
      "Bagging, or Bootstrap Aggregating, trains multiple models independently on different bootstrap samples of the training data and combines their predictions. It primarily helps reduce variance. Random Forest is a popular bagging-based method."
  },

  {
    id: "ml-34",
    question: "What is boosting?",
    answer:
      "Boosting builds models sequentially, where later models focus more on examples that previous models handled poorly. It can produce highly accurate models. Examples include AdaBoost, Gradient Boosting, XGBoost, LightGBM, and CatBoost."
  },

  {
    id: "ml-35",
    question: "What is K-Nearest Neighbors (KNN)?",
    answer:
      "KNN predicts the output for a sample based on the labels or values of its k nearest training examples. For classification, the majority class can be used; for regression, neighboring values can be averaged."
  },

  {
    id: "ml-36",
    question: "Why is feature scaling important for KNN?",
    answer:
      "KNN relies on distance calculations. If one feature has a much larger numerical range than another, it can dominate the distance calculation. Scaling makes features contribute more comparably."
  },

  {
    id: "ml-37",
    question: "What is K-Means clustering?",
    answer:
      "K-Means is an unsupervised clustering algorithm that divides data into K clusters. It initializes centroids, assigns each point to the nearest centroid, recalculates centroids, and repeats until the assignments or centroids stabilize."
  },

  {
    id: "ml-38",
    question: "How do you choose the value of K in K-Means?",
    answer:
      "Common approaches include the Elbow Method and Silhouette Score. The Elbow Method looks for a point where increasing K provides diminishing improvement in within-cluster sum of squares."
  },

  {
    id: "ml-39",
    question: "What is PCA?",
    answer:
      "Principal Component Analysis (PCA) is a dimensionality reduction technique that transforms correlated features into a smaller number of uncorrelated principal components. The first components capture the greatest amount of variance."
  },

  {
    id: "ml-40",
    question: "What is dimensionality reduction and why is it useful?",
    answer:
      "Dimensionality reduction reduces the number of input features while attempting to preserve important information. It can reduce computation, visualization complexity, noise, and sometimes overfitting. PCA is a common technique."
  },

  {
    id: "ml-41",
    question: "What is a confusion matrix?",
    answer:
      "A confusion matrix summarizes classification predictions using True Positives, True Negatives, False Positives, and False Negatives. These values are used to calculate metrics such as accuracy, precision, recall, and F1-score."
  },

  {
    id: "ml-42",
    question: "What is accuracy, precision, and recall?",
    answer:
      "Accuracy = (TP + TN) / (TP + TN + FP + FN). Precision = TP / (TP + FP), measuring how many predicted positives were actually positive. Recall = TP / (TP + FN), measuring how many actual positives were correctly identified."
  },

  {
    id: "ml-43",
    question: "What is F1-score?",
    answer:
      "F1-score is the harmonic mean of precision and recall: F1 = 2 × (Precision × Recall) / (Precision + Recall). It is useful when both false positives and false negatives matter, especially with imbalanced datasets."
  },

  {
    id: "ml-44",
    question: "What is the ROC curve and AUC?",
    answer:
      "The ROC curve plots True Positive Rate against False Positive Rate at different classification thresholds. AUC, or Area Under the ROC Curve, summarizes the model's ability to distinguish between positive and negative classes across thresholds. A value closer to 1 generally indicates better discrimination."
  },

  {
    id: "ml-45",
    question: "Why can accuracy be misleading for imbalanced datasets?",
    answer:
      "If one class is much more common than another, a model can achieve high accuracy by mostly predicting the majority class. For example, if 99% of transactions are legitimate, predicting every transaction as legitimate gives 99% accuracy but detects no fraud. Precision, recall, F1, PR-AUC, and class-specific metrics can be more informative."
  },

  {
    id: "ml-46",
    question: "What is class imbalance and how can it be handled?",
    answer:
      "Class imbalance occurs when some classes have far fewer examples than others. Techniques include class weights, oversampling, undersampling, SMOTE, threshold adjustment, and using suitable evaluation metrics such as precision, recall, F1, or PR-AUC."
  },

  {
    id: "ml-47",
    question: "What is gradient descent?",
    answer:
      "Gradient descent is an optimization algorithm used to minimize a loss function. It repeatedly updates model parameters in the direction opposite to the gradient. The learning rate controls the size of each update."
  },

  {
    id: "ml-48",
    question: "What is a loss function?",
    answer:
      "A loss function measures how different a model's prediction is from the actual target. Training algorithms attempt to minimize this loss. Mean Squared Error is commonly used for regression, while cross-entropy loss is commonly used for classification."
  },

  {
    id: "ml-49",
    question: "What is a neural network?",
    answer:
      "A neural network is a model composed of interconnected layers of neurons. Each neuron computes a weighted combination of inputs, applies an activation function, and passes the result forward. Neural networks can learn complex nonlinear relationships."
  },

  {
    id: "ml-50",
    question: "What is the difference between parameters and hyperparameters?",
    answer:
      "Parameters are learned from training data, such as weights in a neural network or coefficients in linear regression. Hyperparameters are chosen before or during training, such as learning rate, tree depth, number of trees, batch size, and K in KNN or K-Means."
  }
],
AI: [
  {
    id: "ai-1",
    question: "What is Artificial Intelligence?",
    answer:
      "Artificial Intelligence (AI) is the field of computer science focused on building systems that can perform tasks that normally require human intelligence, such as reasoning, learning, perception, language understanding, planning, and decision-making."
  },

  {
    id: "ai-2",
    question: "What is the difference between AI, Machine Learning, and Deep Learning?",
    answer:
      "AI is the broad field of creating intelligent systems. Machine Learning is a subset of AI where systems learn patterns from data. Deep Learning is a subset of Machine Learning that uses multi-layer neural networks. In short: Deep Learning ⊂ Machine Learning ⊂ AI."
  },

  {
    id: "ai-3",
    question: "What are the different types of AI?",
    answer:
      "AI is commonly discussed as Narrow AI, General AI, and Super AI. Narrow AI is designed for specific tasks, such as recommendation systems or voice assistants. Artificial General Intelligence refers to human-level general-purpose intelligence, while Super AI is a hypothetical concept describing intelligence beyond humans."
  },

  {
    id: "ai-4",
    question: "What is Narrow AI?",
    answer:
      "Narrow AI, also called Weak AI, is designed to perform specific tasks. Examples include spam detection, face recognition, recommendation systems, and chess-playing programs. Most AI systems used today are Narrow AI."
  },

  {
    id: "ai-5",
    question: "What is an intelligent agent?",
    answer:
      "An intelligent agent is a system that perceives its environment through sensors and takes actions through actuators to achieve goals. For example, a self-driving car uses cameras and other sensors to perceive its environment and controls steering, acceleration, and braking as actions."
  },

  {
    id: "ai-6",
    question: "What is a rational agent?",
    answer:
      "A rational agent chooses actions that maximize its expected performance according to the information available to it. Rationality does not mean always being correct; it means choosing the best expected action given the agent's knowledge and available actions."
  },

  {
    id: "ai-7",
    question: "What is PEAS in AI?",
    answer:
      "PEAS stands for Performance measure, Environment, Actuators, and Sensors. It is used to describe an intelligent agent's task environment. For example, for a self-driving car, performance could include safety and travel time, sensors include cameras and GPS, and actuators control steering and brakes."
  },

  {
    id: "ai-8",
    question: "What is an environment in AI?",
    answer:
      "The environment is everything external to an intelligent agent that the agent interacts with. It provides percepts through sensors and is affected by the agent's actions."
  },

  {
    id: "ai-9",
    question: "What are fully observable and partially observable environments?",
    answer:
      "In a fully observable environment, the agent can access all relevant information about the current state. In a partially observable environment, the agent has incomplete or noisy information. Chess is close to fully observable, while driving in traffic is partially observable."
  },

  {
    id: "ai-10",
    question: "What is the difference between deterministic and stochastic environments?",
    answer:
      "In a deterministic environment, an action completely determines the resulting state. In a stochastic environment, outcomes involve uncertainty or randomness. For example, a simple puzzle can be deterministic, while a robot operating in a noisy real-world environment is stochastic."
  },

  {
    id: "ai-11",
    question: "What is a search problem in AI?",
    answer:
      "A search problem involves finding a sequence of actions that transforms an initial state into a desired goal state. It typically consists of an initial state, possible actions, transition model, goal test, and path cost."
  },

  {
    id: "ai-12",
    question: "What is the difference between state space and search tree?",
    answer:
      "The state space represents all possible states reachable in a problem. A search tree represents the paths explored by a search algorithm from the initial state. Multiple paths in a search tree can sometimes lead to the same state."
  },

  {
    id: "ai-13",
    question: "What is Breadth-First Search in AI?",
    answer:
      "Breadth-First Search (BFS) explores nodes level by level, expanding the shallowest unexplored nodes first. With equal step costs, BFS is complete and finds a shortest solution in terms of number of steps, but it can require large amounts of memory."
  },

  {
    id: "ai-14",
    question: "What is Depth-First Search in AI?",
    answer:
      "Depth-First Search (DFS) explores one branch as deeply as possible before backtracking. It uses relatively little memory but is not generally optimal and may fail to find a solution efficiently in large or infinite search spaces."
  },

  {
    id: "ai-15",
    question: "What is Uniform Cost Search?",
    answer:
      "Uniform Cost Search expands the node with the lowest path cost so far. It is useful when actions have different costs and, under appropriate conditions such as nonnegative step costs, can find an optimal solution."
  },

  {
    id: "ai-16",
    question: "What is a heuristic function?",
    answer:
      "A heuristic function h(n) estimates the cost from a current state n to a goal state. A good heuristic can significantly reduce the amount of search required. For example, straight-line distance can be used as a heuristic for road navigation."
  },

  {
    id: "ai-17",
    question: "What is Greedy Best-First Search?",
    answer:
      "Greedy Best-First Search selects the node with the lowest heuristic value h(n). It attempts to move toward the goal quickly but is not guaranteed to find the optimal solution."
  },

  {
    id: "ai-18",
    question: "What is A* search?",
    answer:
      "A* combines the actual cost already traveled with an estimated remaining cost using f(n) = g(n) + h(n). With an appropriate admissible heuristic, A* can find an optimal solution while often exploring fewer nodes than Uniform Cost Search."
  },

  {
    id: "ai-19",
    question: "What is an admissible heuristic?",
    answer:
      "An admissible heuristic never overestimates the true minimum cost from a state to the goal. Formally, h(n) ≤ h*(n), where h*(n) is the actual optimal remaining cost. Admissibility is important for the optimality of A* in standard settings."
  },

  {
    id: "ai-20",
    question: "What is the difference between BFS, DFS, and A*?",
    answer:
      "BFS explores shallowest nodes first and is useful for finding shortest paths when step costs are equal. DFS explores deeply and uses less memory but is not generally optimal. A* uses both path cost and a heuristic to intelligently guide the search toward the goal."
  },

  {
    id: "ai-21",
    question: "What is minimax in AI?",
    answer:
      "Minimax is a decision-making algorithm used in two-player zero-sum games. One player attempts to maximize the score while the opponent attempts to minimize it. The algorithm chooses the move with the best worst-case outcome."
  },

  {
    id: "ai-22",
    question: "What is alpha-beta pruning?",
    answer:
      "Alpha-beta pruning improves minimax by eliminating branches that cannot affect the final decision. Alpha represents the best value found for the maximizing player, while beta represents the best value found for the minimizing player."
  },

  {
    id: "ai-23",
    question: "Does alpha-beta pruning change the result of minimax?",
    answer:
      "No. Alpha-beta pruning produces the same optimal decision as minimax when applied correctly. It only reduces the number of nodes that need to be evaluated."
  },

  {
    id: "ai-24",
    question: "What is knowledge representation in AI?",
    answer:
      "Knowledge representation is the process of representing facts, relationships, rules, and concepts in a form that an AI system can use for reasoning. Examples include logic, semantic networks, ontologies, frames, and knowledge graphs."
  },

  {
    id: "ai-25",
    question: "What is propositional logic?",
    answer:
      "Propositional logic represents knowledge using propositions that are either true or false and combines them using logical operators such as AND, OR, NOT, implication, and biconditional."
  },

  {
    id: "ai-26",
    question: "What is first-order logic?",
    answer:
      "First-order logic extends propositional logic by allowing variables, predicates, functions, and quantifiers. It can represent relationships between objects. For example, 'All humans are mortal' can be represented using a universal quantifier."
  },

  {
    id: "ai-27",
    question: "What is an expert system?",
    answer:
      "An expert system is an AI system designed to solve problems in a specific domain using a knowledge base and an inference engine. Traditional expert systems often use explicit rules such as IF-THEN statements."
  },

  {
    id: "ai-28",
    question: "What is a knowledge base?",
    answer:
      "A knowledge base stores facts, rules, relationships, or other information that an AI system can use for reasoning. For example, a medical expert system could store information about symptoms, diseases, and diagnostic rules."
  },

  {
    id: "ai-29",
    question: "What is an inference engine?",
    answer:
      "An inference engine applies logical rules to information in a knowledge base to derive new conclusions. It is a core component of traditional rule-based expert systems."
  },

  {
    id: "ai-30",
    question: "What is fuzzy logic?",
    answer:
      "Fuzzy logic allows values to have degrees of truth rather than being restricted to completely true or completely false. For example, temperature could be represented as 'slightly hot' or 'very hot.' It is useful for systems involving vague or approximate reasoning."
  },

  {
    id: "ai-31",
    question: "What is Natural Language Processing (NLP)?",
    answer:
      "Natural Language Processing is a field of AI concerned with enabling computers to understand, process, generate, and interact using human language. Applications include chatbots, translation, sentiment analysis, summarization, and information extraction."
  },

  {
    id: "ai-32",
    question: "What is tokenization in NLP?",
    answer:
      "Tokenization breaks text into smaller units called tokens. Depending on the tokenizer, tokens can represent words, subwords, characters, or punctuation. Modern language models commonly use subword tokenization."
  },

  {
    id: "ai-33",
    question: "What are stop words in NLP?",
    answer:
      "Stop words are common words that may carry relatively little information for certain NLP tasks, such as 'the', 'is', and 'a'. Some traditional NLP pipelines remove them, although modern neural language models generally do not need stop-word removal."
  },

  {
    id: "ai-34",
    question: "What is stemming vs lemmatization?",
    answer:
      "Stemming removes word endings using simpler rules and can produce non-dictionary forms. Lemmatization attempts to convert words into their valid base or dictionary form using linguistic information. For example, 'better' may be mapped to 'good' by some lemmatizers."
  },

  {
    id: "ai-35",
    question: "What is a word embedding?",
    answer:
      "A word embedding represents words or tokens as numerical vectors in a continuous vector space. Words with similar meanings tend to have similar representations. Word2Vec, GloVe, and FastText are examples of embedding techniques."
  },

  {
    id: "ai-36",
    question: "What is a Transformer in AI?",
    answer:
      "A Transformer is a neural network architecture based heavily on attention mechanisms. It processes relationships between tokens efficiently and has become fundamental to modern NLP and many generative AI systems."
  },

  {
    id: "ai-37",
    question: "What is attention in neural networks?",
    answer:
      "Attention allows a model to assign different importance to different parts of an input when producing an output. In language tasks, attention allows a model to determine which tokens are most relevant to understanding the current token or generating the next one."
  },

  {
    id: "ai-38",
    question: "What is self-attention?",
    answer:
      "Self-attention allows tokens within the same sequence to attend to one another. For example, when processing a sentence, a word can use information from other words in that sentence to understand its meaning and context."
  },

  {
    id: "ai-39",
    question: "What is Computer Vision?",
    answer:
      "Computer Vision is the field of AI concerned with enabling computers to interpret and understand visual information such as images and videos. Applications include image classification, object detection, face recognition, segmentation, and medical image analysis."
  },

  {
    id: "ai-40",
    question: "What is the difference between image classification and object detection?",
    answer:
      "Image classification assigns one or more labels to an entire image. Object detection identifies individual objects and typically provides both their class and bounding box. For example, classification may say 'dog,' while detection can identify multiple dogs and their locations."
  },

  {
    id: "ai-41",
    question: "What is image segmentation?",
    answer:
      "Image segmentation assigns labels to individual pixels or regions of an image. Semantic segmentation assigns a class to each pixel, while instance segmentation also distinguishes between separate objects of the same class."
  },

  {
    id: "ai-42",
    question: "What is Generative AI?",
    answer:
      "Generative AI refers to AI systems capable of generating new content such as text, images, audio, video, or code based on learned patterns. Examples include large language models for text generation and diffusion models for image generation."
  },

  {
    id: "ai-43",
    question: "What is a Large Language Model (LLM)?",
    answer:
      "A Large Language Model is a neural language model trained on large amounts of text to learn patterns in language. Modern LLMs are commonly based on Transformer architectures and can perform tasks such as text generation, summarization, question answering, and code generation."
  },

  {
    id: "ai-44",
    question: "What is the difference between training and inference in AI?",
    answer:
      "Training is the process of learning model parameters from data, while inference is using a trained model to produce predictions or generate outputs for new inputs. Training is usually much more computationally expensive than a single inference operation."
  },

  {
    id: "ai-45",
    question: "What is fine-tuning?",
    answer:
      "Fine-tuning involves taking a pretrained model and continuing its training on a smaller, task-specific or domain-specific dataset. For example, a pretrained language model can be fine-tuned for a specialized classification task."
  },

  {
    id: "ai-46",
    question: "What is prompt engineering?",
    answer:
      "Prompt engineering is the process of designing effective instructions or inputs for a generative AI model. Clear instructions, relevant context, constraints, examples, and an explicit desired output format can improve results."
  },

  {
    id: "ai-47",
    question: "What is Retrieval-Augmented Generation (RAG)?",
    answer:
      "RAG combines information retrieval with generative AI. Instead of relying only on information stored in the model's parameters, the system retrieves relevant documents or passages and provides them as context to the language model before generating an answer. This can improve grounding and allow the system to use external or updated knowledge."
  },

  {
    id: "ai-48",
    question: "What is hallucination in Generative AI?",
    answer:
      "A hallucination occurs when a generative AI system produces information that sounds plausible but is incorrect, unsupported, or fabricated. For example, a model might confidently invent a nonexistent research paper. Retrieval, verification, constrained generation, and better prompting can help reduce hallucinations."
  },

  {
    id: "ai-49",
    question: "What are some ethical challenges associated with AI?",
    answer:
      "Important challenges include bias and discrimination, privacy, lack of transparency, misinformation, security, misuse, copyright concerns, job displacement, and accountability. Responsible AI aims to make systems safer, fairer, more transparent, and appropriately governed."
  },

  {
    id: "ai-50",
    question: "What is explainable AI (XAI) and why is it important?",
    answer:
      "Explainable AI refers to methods that help humans understand why an AI system produced a particular prediction or decision. It is especially important in high-stakes areas such as healthcare, finance, and hiring, where understanding and auditing model decisions can be critical."
  }
],
SystemDesign: [
  {
    id: "sd-1",
    question: "What is System Design?",
    answer:
      "System Design is the process of defining the architecture, components, data flow, APIs, databases, infrastructure, and interactions required to build a software system. The goal is to create a system that satisfies functional requirements while meeting non-functional requirements such as scalability, reliability, performance, and security."
  },

  {
    id: "sd-2",
    question: "What is the difference between functional and non-functional requirements?",
    answer:
      "Functional requirements describe what the system should do, such as allowing users to upload photos. Non-functional requirements describe how the system should behave, such as supporting 1 million users, having low latency, being highly available, and maintaining security."
  },

  {
    id: "sd-3",
    question: "What is scalability?",
    answer:
      "Scalability is the ability of a system to handle increasing workload by adding resources or improving its architecture. A scalable system should continue to provide acceptable performance as users, requests, or data volume increase."
  },

  {
    id: "sd-4",
    question: "What is vertical scaling?",
    answer:
      "Vertical scaling, or scaling up, means increasing the resources of an existing machine, such as adding more CPU, RAM, or storage. It is simple but has physical limits and can create a single-machine dependency."
  },

  {
    id: "sd-5",
    question: "What is horizontal scaling?",
    answer:
      "Horizontal scaling, or scaling out, means adding more machines or instances to distribute workload. For example, instead of one server handling 100,000 requests, several servers can share the traffic."
  },

  {
    id: "sd-6",
    question: "What is the difference between vertical and horizontal scaling?",
    answer:
      "Vertical scaling increases the capacity of one machine, while horizontal scaling adds more machines. Horizontal scaling generally provides better scalability and fault tolerance, but it introduces additional distributed-system complexity."
  },

  {
    id: "sd-7",
    question: "What is a load balancer?",
    answer:
      "A load balancer distributes incoming requests across multiple backend servers. It prevents a single server from becoming overloaded and can improve availability, scalability, and fault tolerance. Common strategies include round robin, least connections, and weighted routing."
  },

  {
    id: "sd-8",
    question: "What is the difference between Layer 4 and Layer 7 load balancing?",
    answer:
      "Layer 4 load balancing operates using transport-level information such as IP addresses and TCP/UDP ports. Layer 7 load balancing understands application-level information such as HTTP paths, headers, and cookies, allowing more intelligent routing decisions."
  },

  {
    id: "sd-9",
    question: "What is a stateless server?",
    answer:
      "A stateless server does not store client session state locally between requests. Each request contains enough information for the server to process it, or shared external storage is used for state. Stateless services are easier to horizontally scale."
  },

  {
    id: "sd-10",
    question: "What is a stateful server?",
    answer:
      "A stateful server maintains information about a client's previous interactions locally. This can make scaling and failover more difficult because subsequent requests may need to reach the same server or access shared state."
  },

  {
    id: "sd-11",
    question: "What is caching?",
    answer:
      "Caching stores frequently accessed data in a faster storage layer so future requests can be served more quickly. For example, frequently requested product information can be stored in Redis instead of querying the database for every request."
  },

  {
    id: "sd-12",
    question: "What are the advantages of caching?",
    answer:
      "Caching reduces database load, improves response time, increases throughput, and can help absorb traffic spikes. The main challenges are cache invalidation, stale data, memory limitations, and deciding what should be cached."
  },

  {
    id: "sd-13",
    question: "What are common cache eviction policies?",
    answer:
      "Common policies include LRU (Least Recently Used), LFU (Least Frequently Used), FIFO (First In First Out), and TTL-based expiration. LRU removes data that has not been accessed recently, while LFU removes data accessed least frequently."
  },

  {
    id: "sd-14",
    question: "What is cache invalidation?",
    answer:
      "Cache invalidation is the process of removing or updating cached data when the underlying data changes. It is challenging because stale cached data can be returned if the cache is not updated or expired correctly."
  },

  {
    id: "sd-15",
    question: "What is the cache-aside pattern?",
    answer:
      "In the cache-aside pattern, the application first checks the cache. If the data exists, it is returned. If there is a cache miss, the application queries the database, returns the result, and stores it in the cache for future requests."
  },

  {
    id: "sd-16",
    question: "What is a database index?",
    answer:
      "A database index is a data structure that allows the database to locate rows more efficiently without scanning the entire table. For example, an index on user_id can make queries searching for a specific user much faster, at the cost of additional storage and write overhead."
  },

  {
    id: "sd-17",
    question: "What is database replication?",
    answer:
      "Replication maintains copies of database data on multiple servers. A primary database can handle writes while replica databases handle reads. Replication improves availability and read scalability but introduces challenges such as replication lag."
  },

  {
    id: "sd-18",
    question: "What is database sharding?",
    answer:
      "Sharding horizontally partitions data across multiple database servers. For example, users with IDs 1–1,000,000 could be stored on one shard while later IDs are stored on another. Sharding helps scale datasets and workloads beyond the capacity of one database server."
  },

  {
    id: "sd-19",
    question: "What is the difference between replication and sharding?",
    answer:
      "Replication creates multiple copies of the same data, primarily improving availability and read scalability. Sharding divides different portions of the data across different servers, primarily improving storage and write/read scalability."
  },

  {
    id: "sd-20",
    question: "What is SQL vs NoSQL?",
    answer:
      "SQL databases are generally relational, schema-based, and support powerful queries and transactions. NoSQL databases use models such as key-value, document, column-family, or graph and often prioritize flexible schemas and horizontal scalability for specific workloads."
  },

  {
    id: "sd-21",
    question: "When would you choose a NoSQL database over SQL?",
    answer:
      "NoSQL can be useful when the application requires flexible schemas, massive horizontal scaling, high write throughput, or access patterns suited to a specific NoSQL model. SQL is often preferable when strong relational modeling, complex queries, and transactional consistency are important."
  },

  {
    id: "sd-22",
    question: "What is database normalization?",
    answer:
      "Normalization organizes relational data to reduce duplication and update anomalies. For example, instead of storing a customer's address repeatedly in every order row, customer information can be stored separately and referenced using a key."
  },

  {
    id: "sd-23",
    question: "What is denormalization and why is it used?",
    answer:
      "Denormalization intentionally duplicates or combines data to reduce expensive joins and improve read performance. It is commonly used in high-scale systems where read performance is more important than minimizing data duplication."
  },

  {
    id: "sd-24",
    question: "What is a database transaction?",
    answer:
      "A transaction is a sequence of database operations treated as a single logical unit of work. It should follow ACID properties so that either all required changes are applied correctly or the transaction is rolled back."
  },

  {
    id: "sd-25",
    question: "What are ACID properties?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity means all-or-nothing execution. Consistency preserves valid database states. Isolation controls interaction between concurrent transactions. Durability ensures committed data survives failures."
  },

  {
    id: "sd-26",
    question: "What is an API?",
    answer:
      "An API (Application Programming Interface) defines how different software components communicate. For example, a frontend might call GET /users/123 to request information about user 123 from a backend service."
  },

  {
    id: "sd-27",
    question: "What is REST?",
    answer:
      "REST is an architectural style commonly used for web APIs. RESTful systems typically use resources identified by URLs and HTTP methods such as GET, POST, PUT, PATCH, and DELETE. Stateless communication is an important REST constraint."
  },

  {
    id: "sd-28",
    question: "What is the difference between PUT and PATCH?",
    answer:
      "PUT is generally used to replace the representation of a resource, while PATCH is used for partial updates. For example, PUT /users/10 could replace a user's full representation, while PATCH /users/10 could update only the email field."
  },

  {
    id: "sd-29",
    question: "What is API rate limiting?",
    answer:
      "Rate limiting restricts how many requests a client can make within a specific period. For example, an API might allow 100 requests per minute per user. It protects services from abuse, accidental overload, and denial-of-service traffic."
  },

  {
    id: "sd-30",
    question: "What are common rate-limiting algorithms?",
    answer:
      "Common approaches include fixed window, sliding window, token bucket, and leaky bucket. Token bucket allows requests to consume tokens while tokens are replenished at a fixed rate, allowing controlled bursts."
  },

  {
    id: "sd-31",
    question: "What is a message queue?",
    answer:
      "A message queue allows producers to send messages that consumers process asynchronously. This decouples services and allows work to be processed later. Examples include sending an email through a queue instead of making the user wait for the email service to finish."
  },

  {
    id: "sd-32",
    question: "Why are message queues useful in system design?",
    answer:
      "Message queues provide asynchronous processing, service decoupling, buffering during traffic spikes, and improved fault tolerance. They are useful for tasks such as email delivery, payment processing, notifications, and background jobs."
  },

  {
    id: "sd-33",
    question: "What is the difference between synchronous and asynchronous communication?",
    answer:
      "In synchronous communication, the caller waits for the operation to complete and receive a response. In asynchronous communication, the caller can continue working while the operation is processed separately, often through queues or events."
  },

  {
    id: "sd-34",
    question: "What is a microservice architecture?",
    answer:
      "Microservice architecture divides an application into multiple independently deployable services, each responsible for a specific business capability. For example, an e-commerce system could have separate user, product, order, payment, and notification services."
  },

  {
    id: "sd-35",
    question: "What are the advantages and disadvantages of microservices?",
    answer:
      "Advantages include independent deployment, team autonomy, service-specific scaling, and fault isolation. Disadvantages include increased operational complexity, network communication overhead, distributed transactions, monitoring challenges, and more difficult debugging."
  },

  {
    id: "sd-36",
    question: "What is a monolithic architecture?",
    answer:
      "A monolithic architecture packages most or all application functionality into a single deployable application. It is simpler to develop and deploy initially, but independently scaling or deploying individual components can become difficult as the system grows."
  },

  {
    id: "sd-37",
    question: "What is eventual consistency?",
    answer:
      "Eventual consistency means that replicas may temporarily contain different values, but if no new updates occur, they will eventually converge to the same state. It is commonly used in distributed systems where availability and scalability are prioritized."
  },

  {
    id: "sd-38",
    question: "What is strong consistency?",
    answer:
      "Strong consistency means that after a successful write, subsequent reads observe the latest committed value according to the system's consistency model. It simplifies application reasoning but can require additional coordination and may affect availability or latency."
  },

  {
    id: "sd-39",
    question: "What is the CAP theorem?",
    answer:
      "The CAP theorem states that a distributed data system cannot simultaneously guarantee Consistency, Availability, and Partition tolerance under a network partition. Since network partitions must be tolerated in distributed systems, designs generally make trade-offs between consistency and availability during partitions."
  },

  {
    id: "sd-40",
    question: "What is high availability?",
    answer:
      "High availability means a system remains operational and accessible for a very high percentage of time despite failures. It is achieved through redundancy, replication, failover, health checks, load balancing, and avoiding single points of failure."
  },

  {
    id: "sd-41",
    question: "What is fault tolerance?",
    answer:
      "Fault tolerance is the ability of a system to continue operating correctly or acceptably when one or more components fail. For example, running multiple backend servers allows traffic to continue if one server crashes."
  },

  {
    id: "sd-42",
    question: "What is a single point of failure?",
    answer:
      "A single point of failure is a component whose failure can bring down the entire system or a critical part of it. For example, if an application depends on only one database server with no backup or failover mechanism, that database is a single point of failure."
  },

  {
    id: "sd-43",
    question: "What is a CDN and why is it useful?",
    answer:
      "A Content Delivery Network stores or serves cached content from geographically distributed edge servers. It reduces latency by serving content closer to users and reduces load on the origin servers. CDNs are commonly used for images, videos, JavaScript, CSS, and other static content."
  },

  {
    id: "sd-44",
    question: "What is a reverse proxy?",
    answer:
      "A reverse proxy sits between clients and backend servers and forwards requests to the appropriate backend. It can provide load balancing, TLS termination, caching, compression, authentication, routing, and security."
  },

  {
    id: "sd-45",
    question: "What is horizontal partitioning?",
    answer:
      "Horizontal partitioning divides rows of a database table into separate partitions. Each partition contains the same columns but different rows. Sharding is a distributed form of horizontal partitioning where partitions are placed across different database servers."
  },

  {
    id: "sd-46",
    question: "How would you design a URL shortener like Bitly?",
    answer:
      "A basic design would contain an API service, database, cache, and load balancer. When a user submits a long URL, the service generates a unique short ID and stores the mapping. When the short URL is accessed, the service retrieves the original URL and redirects the user. At scale, caching frequently accessed mappings and distributing database storage can improve performance."
  },

  {
    id: "sd-47",
    question: "How would you design a notification system?",
    answer:
      "A notification system can use an API service, message queue, notification workers, user preferences storage, and providers for email, SMS, or push notifications. Requests can be placed into a queue so notification delivery happens asynchronously. Retries and dead-letter queues can handle temporary provider failures."
  },

  {
    id: "sd-48",
    question: "How would you design a simple chat application?",
    answer:
      "A basic chat system can contain client applications, API servers, WebSocket servers for real-time communication, a message database, and a message queue. WebSockets allow servers to push messages to connected clients. Messages should be persisted so users can retrieve chat history after reconnecting."
  },

  {
    id: "sd-49",
    question: "How would you design a file-sharing system like Google Drive?",
    answer:
      "A basic design would use an API service for metadata and authentication, object storage for file contents, a database for file metadata, and a CDN for frequently accessed files. Large files can be uploaded using multipart or resumable uploads. Access control determines who can view or modify each file."
  },

  {
    id: "sd-50",
    question: "What approach should you follow when answering a System Design interview question?",
    answer:
      "Start by clarifying requirements and identifying functional and non-functional requirements. Estimate scale such as users, requests per second, and storage. Define APIs and major entities, then design the high-level architecture. Choose databases, caching, queues, and storage based on requirements. Finally, discuss bottlenecks, scalability, reliability, security, and trade-offs. The interviewer is usually interested in your reasoning, not just the final architecture."
  }
],
   DSA: [
  {
    id: "ds-1",
    question: "What is a data structure?",
    answer:
      "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Common examples include arrays, linked lists, stacks, queues, hash tables, trees, heaps, and graphs."
  },

  {
    id: "ds-2",
    question: "What is Big-O notation?",
    answer:
      "Big-O notation describes the upper bound on the growth of an algorithm's time or space requirements as the input size increases. For example, binary search is O(log n), while linear search is O(n)."
  },

  {
    id: "ds-3",
    question: "What are Big-O, Big-Omega, and Big-Theta?",
    answer:
      "Big-O represents an asymptotic upper bound, Big-Omega represents an asymptotic lower bound, and Big-Theta represents a tight asymptotic bound. For example, if an algorithm always takes proportional to n operations, its complexity is Θ(n), which also implies O(n) and Ω(n)."
  },

  {
    id: "ds-4",
    question: "What is the difference between time complexity and space complexity?",
    answer:
      "Time complexity describes how the running time grows with input size. Space complexity describes how much additional memory an algorithm requires as the input grows. For example, iterative binary search takes O(log n) time and O(1) auxiliary space."
  },

  {
    id: "ds-5",
    question: "What is amortized time complexity?",
    answer:
      "Amortized complexity describes the average cost per operation over a sequence of operations, even if some individual operations are expensive. For example, appending to a dynamically resizing array is O(1) amortized even though resizing occasionally takes O(n)."
  },

  {
    id: "ds-6",
    question: "What is the time complexity of common array operations?",
    answer:
      "Access by index is O(1). Searching an unsorted array is O(n). Searching a sorted array with binary search is O(log n). Inserting or deleting in the middle is generally O(n) because elements may need to be shifted."
  },

  {
    id: "ds-7",
    question: "What is linear search?",
    answer:
      "Linear search checks elements one by one until the target is found or the array ends. It works on both sorted and unsorted data. Its time complexity is O(n) in the worst case and O(1) in the best case."
  },

  {
    id: "ds-8",
    question: "What is binary search?",
    answer:
      "Binary search repeatedly divides a sorted search space in half. It compares the target with the middle element and eliminates half of the remaining possibilities after each comparison. Its time complexity is O(log n)."
  },

  {
    id: "ds-9",
    question: "What conditions are required for binary search?",
    answer:
      "Binary search requires a search space where the comparison allows one half to be eliminated at every step. The classic array implementation requires sorted data, although binary-search-style techniques can also be applied to monotonic answer spaces."
  },

  {
    id: "ds-10",
    question: "What is bubble sort and its complexity?",
    answer:
      "Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. Its worst-case and average time complexity is O(n²). With an early-exit optimization, the best case can be O(n) when the array is already sorted."
  },

  {
    id: "ds-11",
    question: "What is selection sort?",
    answer:
      "Selection sort repeatedly finds the minimum element from the unsorted portion and places it at the correct position. Its best, average, and worst-case time complexity is O(n²), while its auxiliary space is O(1)."
  },

  {
    id: "ds-12",
    question: "What is insertion sort?",
    answer:
      "Insertion sort builds the sorted portion one element at a time by inserting each new element into its correct position. Its worst-case time complexity is O(n²), but its best case is O(n) when the array is already sorted."
  },

  {
    id: "ds-13",
    question: "What is merge sort?",
    answer:
      "Merge sort uses divide and conquer. It recursively divides the array into halves, sorts each half, and merges the sorted halves. Its time complexity is O(n log n) in all standard cases and it typically requires O(n) auxiliary space for arrays."
  },

  {
    id: "ds-14",
    question: "What is quicksort?",
    answer:
      "Quicksort uses divide and conquer by selecting a pivot and partitioning the array around it. Its average time complexity is O(n log n), while the worst case is O(n²) with consistently poor pivot choices. Typical in-place implementations use O(log n) expected recursion stack space."
  },

  {
    id: "ds-15",
    question: "What is the difference between merge sort and quicksort?",
    answer:
      "Both have O(n log n) average or guaranteed comparison-sorting performance under their standard analyses, but merge sort guarantees O(n log n) time and usually requires O(n) auxiliary space for arrays. Quicksort is often in-place and can have excellent practical cache performance, but its worst case is O(n²) unless implemented with suitable pivot strategies."
  },

  {
    id: "ds-16",
    question: "What is heap sort?",
    answer:
      "Heap sort builds a heap and repeatedly extracts the maximum or minimum element to produce the sorted order. Its best, average, and worst-case time complexity is O(n log n), and it can be implemented with O(1) auxiliary array space."
  },

  {
    id: "ds-17",
    question: "What is counting sort?",
    answer:
      "Counting sort counts the occurrences of each value and uses those counts to construct the sorted output. It is not a comparison sort and can run in O(n + k), where k is the range of possible values. It is useful when k is reasonably small compared with n."
  },

  {
    id: "ds-18",
    question: "What is a stable sorting algorithm?",
    answer:
      "A stable sorting algorithm preserves the relative order of elements with equal keys. Stability is useful when sorting records by multiple fields. Merge sort and insertion sort are commonly stable, while standard in-place quicksort and heap sort are generally not stable."
  },

  {
    id: "ds-19",
    question: "What is a linked list?",
    answer:
      "A linked list consists of nodes where each node stores data and a reference to another node. In a singly linked list, each node points to the next node. Unlike arrays, linked-list nodes do not need contiguous memory."
  },

  {
    id: "ds-20",
    question: "How do you reverse a singly linked list?",
    answer:
      "Use three pointers: previous, current, and next. Save current.next, change current.next to previous, then move previous and current forward. Continue until current becomes null. The algorithm takes O(n) time and O(1) auxiliary space."
  },

  {
    id: "ds-21",
    question: "How do you detect a cycle in a linked list?",
    answer:
      "Floyd's cycle detection algorithm uses a slow pointer moving one step and a fast pointer moving two steps. If they meet, a cycle exists. The algorithm takes O(n) time and O(1) extra space."
  },

  {
    id: "ds-22",
    question: "How do you find the middle element of a linked list?",
    answer:
      "Use a slow pointer and a fast pointer. Slow moves one step at a time while fast moves two. When fast reaches the end, slow is at the middle. This takes O(n) time and O(1) extra space."
  },

  {
    id: "ds-23",
    question: "What is a stack?",
    answer:
      "A stack follows the LIFO principle: Last In, First Out. Common operations are push, pop, and peek/top, which can all be O(1) with an appropriate implementation."
  },

  {
    id: "ds-24",
    question: "What are common applications of stacks?",
    answer:
      "Stacks are used in recursion and function-call management, expression evaluation, balanced-parentheses problems, undo operations, browser history, DFS, and backtracking."
  },

  {
    id: "ds-25",
    question: "What is a queue?",
    answer:
      "A queue follows FIFO: First In, First Out. Elements are inserted at the rear and removed from the front. Queues are commonly used in BFS, scheduling, buffering, and producer-consumer systems."
  },

  {
    id: "ds-26",
    question: "What is a hash table and what is its average complexity?",
    answer:
      "A hash table stores key-value pairs using a hash function to determine storage locations. With a good hash function and controlled load factor, search, insertion, and deletion are typically O(1) average case, although worst-case performance can be O(n)."
  },

  {
    id: "ds-27",
    question: "What is a collision in hashing and how can it be handled?",
    answer:
      "A collision occurs when different keys map to the same index. Common solutions include separate chaining, where each bucket stores multiple entries, and open addressing, where another available position is searched."
  },

  {
    id: "ds-28",
    question: "What is the two-pointer technique?",
    answer:
      "The two-pointer technique uses two indices that move through an array or string according to certain conditions. It is commonly used for pair-sum problems, removing duplicates, merging sorted arrays, and partitioning. Many such solutions run in O(n)."
  },

  {
    id: "ds-29",
    question: "What is the sliding window technique?",
    answer:
      "Sliding window maintains a contiguous range of elements and moves its boundaries as the algorithm processes the input. It is commonly used for longest substring, maximum/minimum subarray, and fixed-size window problems, often reducing O(n²) solutions to O(n)."
  },

  {
    id: "ds-30",
    question: "What is the prefix sum technique?",
    answer:
      "A prefix sum array stores cumulative sums so that the sum of a range can be calculated quickly. If prefix[i] stores the sum up to index i, then the sum from l to r can be calculated in O(1) using prefix[r] - prefix[l-1]."
  },

  {
    id: "ds-31",
    question: "What is a binary tree?",
    answer:
      "A binary tree is a tree in which each node has at most two children. The children are usually called left and right. A binary tree does not necessarily satisfy the ordering property required by a Binary Search Tree."
  },

  {
    id: "ds-32",
    question: "What are preorder, inorder, and postorder traversals?",
    answer:
      "Preorder visits Root → Left → Right. Inorder visits Left → Root → Right. Postorder visits Left → Right → Root. Inorder traversal of a valid BST produces elements in sorted order."
  },

  {
    id: "ds-33",
    question: "What is the complexity of traversing a tree?",
    answer:
      "A traversal such as preorder, inorder, postorder, or level-order visits every node once, so the time complexity is O(n). Recursive DFS requires O(h) call-stack space, where h is the tree height."
  },

  {
    id: "ds-34",
    question: "What is a Binary Search Tree?",
    answer:
      "A Binary Search Tree is a binary tree where values in the left subtree are ordered before the node and values in the right subtree are ordered after it, according to the chosen duplicate convention. This property enables efficient searching when the tree is balanced."
  },

  {
    id: "ds-35",
    question: "What is the time complexity of searching in a BST?",
    answer:
      "BST search takes O(h), where h is the tree height. For a balanced BST, h is O(log n), so search is O(log n). In the worst case of a skewed tree, h becomes O(n)."
  },

  {
    id: "ds-36",
    question: "What is a heap and where is it used?",
    answer:
      "A heap is a complete binary tree satisfying a heap property. A min-heap keeps the smallest value at the root, while a max-heap keeps the largest. Heaps are commonly used for priority queues, scheduling, top-K problems, and heap sort."
  },

  {
    id: "ds-37",
    question: "What is the complexity of common heap operations?",
    answer:
      "Accessing the root is O(1). Inserting an element and removing the root are O(log n). Building a heap from an existing array using bottom-up heapify takes O(n)."
  },

  {
    id: "ds-38",
    question: "What is a graph?",
    answer:
      "A graph consists of vertices and edges representing relationships between entities. Graphs can be directed or undirected and weighted or unweighted. They are used to model networks, maps, dependencies, social connections, and many other relationships."
  },

  {
    id: "ds-39",
    question: "What is the difference between an adjacency matrix and an adjacency list?",
    answer:
      "An adjacency matrix uses O(V²) space and provides O(1) edge lookup. An adjacency list uses O(V + E) space and is generally more efficient for sparse graphs. The choice depends on graph density and required operations."
  },

  {
    id: "ds-40",
    question: "What is BFS and what is its time complexity?",
    answer:
      "Breadth-First Search explores a graph level by level using a queue. With an adjacency list, BFS takes O(V + E) time because each vertex and edge is processed at most a constant number of times."
  },

  {
    id: "ds-41",
    question: "What is DFS and what is its time complexity?",
    answer:
      "Depth-First Search explores one path as deeply as possible before backtracking. It can be implemented recursively or with a stack. With an adjacency list, its time complexity is O(V + E)."
  },

  {
    id: "ds-42",
    question: "How do you find the shortest path in an unweighted graph?",
    answer:
      "Use BFS starting from the source vertex. Since every edge has equal cost, BFS visits vertices in increasing order of distance from the source. The time complexity is O(V + E) using an adjacency list."
  },

  {
    id: "ds-43",
    question: "What is Dijkstra's algorithm?",
    answer:
      "Dijkstra's algorithm finds shortest paths from a source vertex in a weighted graph with non-negative edge weights. Using a binary heap priority queue, a typical implementation runs in O((V + E) log V), often written as O(E log V) for connected graphs."
  },

  {
    id: "ds-44",
    question: "What is a greedy algorithm?",
    answer:
      "A greedy algorithm makes the best locally available choice at each step with the hope that these choices lead to a globally optimal solution. Greedy algorithms work only when the problem has the appropriate properties. Examples include activity selection, Huffman coding, and Kruskal's algorithm."
  },

  {
    id: "ds-45",
    question: "What is divide and conquer?",
    answer:
      "Divide and conquer divides a problem into smaller subproblems, solves them recursively, and combines their results. Merge sort and quicksort are classic examples. The approach often leads to efficient algorithms such as O(n log n) sorting."
  },

  {
    id: "ds-46",
    question: "What is Dynamic Programming?",
    answer:
      "Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems and storing previously computed results so they are not solved repeatedly. DP can be implemented using memoization (top-down) or tabulation (bottom-up)."
  },

  {
    id: "ds-47",
    question: "How do you identify a Dynamic Programming problem?",
    answer:
      "Look for overlapping subproblems and optimal substructure. Typical clues include questions asking for the minimum, maximum, number of ways, or whether something is possible over a sequence of decisions. Examples include Fibonacci, 0/1 Knapsack, LCS, and coin change."
  },

  {
    id: "ds-48",
    question: "What is backtracking?",
    answer:
      "Backtracking explores possible choices recursively and abandons a partial solution when it cannot lead to a valid answer. It is commonly used for N-Queens, Sudoku, permutations, combinations, and subset-generation problems."
  },

  {
    id: "ds-49",
    question: "What is a Trie and when would you use it?",
    answer:
      "A Trie is a tree-based structure for storing strings character by character. Searching or inserting a word typically takes O(L), where L is the word length. It is useful for autocomplete, prefix searches, dictionaries, and word-search problems."
  },

  {
    id: "ds-50",
    question: "What are the most important algorithmic patterns to recognize in coding interviews?",
    answer:
      "Common patterns include two pointers, sliding window, prefix sums, binary search, fast and slow pointers, hashing, monotonic stacks, BFS/DFS, heaps for top-K problems, greedy algorithms, divide and conquer, backtracking, and dynamic programming. Recognizing the pattern often matters more than memorizing a single solution."
  }
],
OOPs: [
  {
    id: "oop-1",
    question: "What is Object-Oriented Programming?",
    answer:
      "Object-Oriented Programming (OOP) is a programming paradigm that organizes software around objects containing data and behavior. The four commonly discussed principles are encapsulation, abstraction, inheritance, and polymorphism."
  },

  {
    id: "oop-2",
    question: "What is a class?",
    answer:
      "A class is a blueprint or template that defines the properties and behaviors that objects created from it can have. For example, a Car class might contain properties such as color and speed and methods such as accelerate()."
  },

  {
    id: "oop-3",
    question: "What is an object?",
    answer:
      "An object is an instance of a class. It has its own state, represented by its data, and behavior, represented by its methods. For example, a specific BMW car can be an object created from a Car class."
  },

  {
    id: "oop-4",
    question: "What are the four main principles of OOP?",
    answer:
      "The four commonly recognized principles are Encapsulation, Abstraction, Inheritance, and Polymorphism. Encapsulation bundles data and methods, abstraction hides unnecessary implementation details, inheritance enables reuse through relationships between classes, and polymorphism allows the same interface to behave differently for different objects."
  },

  {
    id: "oop-5",
    question: "What is encapsulation?",
    answer:
      "Encapsulation means bundling data and the methods that operate on that data together while controlling access to the internal state. For example, a BankAccount can keep balance private and expose deposit() and withdraw() methods."
  },

  {
    id: "oop-6",
    question: "What is abstraction?",
    answer:
      "Abstraction means exposing only the essential details of an object while hiding unnecessary implementation details. For example, a user can call car.start() without needing to know how the engine internally starts."
  },

  {
    id: "oop-7",
    question: "What is inheritance?",
    answer:
      "Inheritance allows a class to derive properties and behaviors from another class. For example, Dog and Cat could inherit common properties from an Animal class. It promotes reuse but should be used carefully to avoid overly tight coupling."
  },

  {
    id: "oop-8",
    question: "What is polymorphism?",
    answer:
      "Polymorphism means that the same interface or method call can produce different behavior depending on the object involved. Common forms include method overloading and method overriding, depending on the programming language."
  },

  {
    id: "oop-9",
    question: "What is method overloading?",
    answer:
      "Method overloading means having multiple methods with the same name but different parameter lists. It is generally resolved at compile time in languages such as Java and C++. Example: add(int, int) and add(int, int, int)."
  },

  {
    id: "oop-10",
    question: "What is method overriding?",
    answer:
      "Method overriding occurs when a subclass provides its own implementation of a method inherited from a superclass. It enables runtime polymorphism in languages such as Java when the method is invoked through a suitable superclass reference."
  },

  {
    id: "oop-11",
    question: "What is the difference between overloading and overriding?",
    answer:
      "Overloading uses the same method name with different parameter lists and is generally resolved at compile time. Overriding occurs when a subclass redefines an inherited method with a compatible signature and is associated with runtime polymorphism."
  },

  {
    id: "oop-12",
    question: "What is a constructor?",
    answer:
      "A constructor is a special mechanism used to initialize a newly created object. It typically assigns initial values to instance variables and establishes the object's initial valid state."
  },

  {
    id: "oop-13",
    question: "Can a constructor be overloaded?",
    answer:
      "Yes. A class can have multiple constructors with different parameter lists. For example, a Student class could have a no-argument constructor and another constructor accepting name and rollNumber."
  },

  {
    id: "oop-14",
    question: "What is a destructor?",
    answer:
      "A destructor is a mechanism used in languages such as C++ to perform cleanup when an object is destroyed. It is commonly used to release resources owned by the object. Languages with garbage collection, such as Java, do not use destructors in the same deterministic way."
  },

  {
    id: "oop-15",
    question: "What is the difference between an instance variable and a static variable?",
    answer:
      "An instance variable belongs to an individual object, so each object can have its own value. A static or class variable belongs to the class itself and is shared among instances, subject to the language's rules."
  },

  {
    id: "oop-16",
    question: "What is a static method?",
    answer:
      "A static method belongs to the class rather than a particular object. It can generally be called using the class name and does not directly access instance-specific state unless an object reference is provided."
  },

  {
    id: "oop-17",
    question: "What are access modifiers?",
    answer:
      "Access modifiers control where classes, methods, and variables can be accessed. Common modifiers include public, private, and protected. The exact rules differ between languages."
  },

  {
    id: "oop-18",
    question: "What is the difference between public, private, and protected?",
    answer:
      "Public members can generally be accessed from outside the class. Private members are restricted to the class itself. Protected members are typically accessible within the class and in derived classes, although exact behavior depends on the language."
  },

  {
    id: "oop-19",
    question: "Why are data members often declared private?",
    answer:
      "Private data members prevent uncontrolled external modification and help maintain class invariants. Access can be provided through methods such as getters, setters, or domain-specific operations."
  },

  {
    id: "oop-20",
    question: "What is an interface?",
    answer:
      "An interface defines a contract that implementing classes agree to follow. It focuses on what operations are available rather than requiring a particular implementation. Interfaces are especially useful for abstraction and loose coupling."
  },

  {
    id: "oop-21",
    question: "What is an abstract class?",
    answer:
      "An abstract class is a class intended to serve as a base class and generally cannot be instantiated directly. It can contain abstract methods as well as implemented methods, depending on the language."
  },

  {
    id: "oop-22",
    question: "What is the difference between an abstract class and an interface?",
    answer:
      "An abstract class can generally contain shared state and implemented behavior in addition to abstract behavior. An interface primarily defines a contract. The exact capabilities differ by language; for example, modern Java interfaces can contain default and static methods."
  },

  {
    id: "oop-23",
    question: "What is multiple inheritance?",
    answer:
      "Multiple inheritance occurs when a class inherits directly from more than one parent class. C++ supports multiple class inheritance, while Java does not allow a class to extend multiple classes but allows a class to implement multiple interfaces."
  },

  {
    id: "oop-24",
    question: "What is the diamond problem?",
    answer:
      "The diamond problem occurs when a class inherits from two classes that both inherit from the same base class, creating ambiguity about which inherited implementation or state should be used. Languages handle this differently; C++ provides mechanisms such as virtual inheritance."
  },

  {
    id: "oop-25",
    question: "What is composition?",
    answer:
      "Composition models a 'has-a' relationship where one object contains or uses another object. For example, a Car has an Engine. Composition is often preferred over inheritance when behavior can be built by combining independent components."
  },

  {
    id: "oop-26",
    question: "What is the difference between inheritance and composition?",
    answer:
      "Inheritance represents an 'is-a' relationship, such as Dog is an Animal. Composition represents a 'has-a' or 'uses-a' relationship, such as Car has an Engine. Composition often provides greater flexibility and lower coupling."
  },

  {
    id: "oop-27",
    question: "What is association?",
    answer:
      "Association represents a general relationship between two classes or objects. For example, a Teacher teaches a Student. The objects can generally exist independently of each other."
  },

  {
    id: "oop-28",
    question: "What is aggregation?",
    answer:
      "Aggregation is a weaker whole-part relationship where the contained objects can exist independently of the container. For example, a Department may have Professors, but a Professor can continue to exist even if the Department is removed."
  },

  {
    id: "oop-29",
    question: "What is composition versus aggregation?",
    answer:
      "Composition represents stronger ownership and usually implies that the contained object's lifecycle is tied to the containing object. Aggregation represents weaker ownership where the contained object can exist independently."
  },

  {
    id: "oop-30",
    question: "What is dynamic binding?",
    answer:
      "Dynamic binding means determining which method implementation to execute at runtime rather than compile time. It is commonly associated with method overriding and runtime polymorphism."
  },

  {
    id: "oop-31",
    question: "What is static binding?",
    answer:
      "Static binding means the method or operation to execute is determined at compile time. Method overloading and many static method calls are examples of behavior that can use compile-time binding."
  },

  {
    id: "oop-32",
    question: "What is an upcasting?",
    answer:
      "Upcasting means treating an object of a subclass as an object of its superclass. For example, Animal a = new Dog() in Java. It is generally safe because a Dog is an Animal."
  },

  {
    id: "oop-33",
    question: "What is downcasting?",
    answer:
      "Downcasting converts a superclass reference into a subclass reference. It is only safe when the referenced object is actually an instance of the target subclass. Otherwise, the operation may fail at runtime."
  },

  {
    id: "oop-34",
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "A shallow copy copies the object's immediate fields but may share references to nested objects. A deep copy creates independent copies of the nested objects as well. Deep copying prevents modifications to nested mutable objects from affecting the original."
  },

  {
    id: "oop-35",
    question: "What is immutability?",
    answer:
      "An immutable object cannot have its observable state changed after construction. Immutable objects are easier to reason about and are often safer to share between threads. Java's String class is a common example."
  },

  {
    id: "oop-36",
    question: "Why is String immutable in Java?",
    answer:
      "String immutability provides benefits such as safe sharing, predictable behavior, string-pool optimizations, and security. Once a String object is created, operations that appear to modify it actually produce another String object."
  },

  {
    id: "oop-37",
    question: "What is the difference between == and equals() in Java?",
    answer:
      "For objects, == compares whether two references refer to the same object, while equals() is intended to compare logical equality according to the class's implementation. For example, two separately created String objects may contain the same text but not be ==."
  },

  {
    id: "oop-38",
    question: "What is the difference between an object and a reference in Java?",
    answer:
      "An object is the actual instance stored in memory, while a reference is a value that refers to that object. Multiple references can refer to the same object."
  },

  {
    id: "oop-39",
    question: "What is garbage collection?",
    answer:
      "Garbage collection automatically identifies objects that are no longer reachable and reclaims their memory. Java and many other managed languages use garbage collection, reducing the need for explicit memory deallocation."
  },

  {
    id: "oop-40",
    question: "What is SOLID in OOP?",
    answer:
      "SOLID is a set of five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. They aim to make object-oriented software easier to maintain, extend, and test."
  },

  {
    id: "oop-41",
    question: "What is the Single Responsibility Principle?",
    answer:
      "The Single Responsibility Principle states that a class should have one primary responsibility and therefore one main reason to change. For example, separating invoice calculation from invoice printing can make the system easier to maintain."
  },

  {
    id: "oop-42",
    question: "What is the Open/Closed Principle?",
    answer:
      "The Open/Closed Principle states that software entities should be open for extension but closed for modification. New behavior should ideally be added through new implementations or abstractions rather than repeatedly changing stable existing code."
  },

  {
    id: "oop-43",
    question: "What is the Liskov Substitution Principle?",
    answer:
      "The Liskov Substitution Principle states that objects of a subclass should be usable wherever objects of the superclass are expected without breaking the correctness of the program. A subclass should honor the behavioral contract of its parent."
  },

  {
    id: "oop-44",
    question: "What is the Interface Segregation Principle?",
    answer:
      "The Interface Segregation Principle states that clients should not be forced to depend on methods they do not use. Instead of one large interface, it is often better to create smaller, focused interfaces."
  },

  {
    id: "oop-45",
    question: "What is the Dependency Inversion Principle?",
    answer:
      "The Dependency Inversion Principle states that high-level modules should depend on abstractions rather than concrete low-level implementations. This reduces coupling and makes components easier to replace and test."
  },

  {
    id: "oop-46",
    question: "What is loose coupling?",
    answer:
      "Loose coupling means minimizing dependencies between components so that one component can change without requiring major changes to others. Interfaces, dependency injection, and composition can help achieve loose coupling."
  },

  {
    id: "oop-47",
    question: "What is dependency injection?",
    answer:
      "Dependency injection means providing an object's dependencies from outside instead of having the object construct them internally. This improves testability and reduces coupling. For example, a Service can receive a Database interface through its constructor."
  },

  {
    id: "oop-48",
    question: "What is the Factory Design Pattern?",
    answer:
      "The Factory Pattern centralizes object creation so that client code does not need to directly instantiate every concrete implementation. For example, a NotificationFactory could create EmailNotification, SMSNotification, or PushNotification objects based on the requested type."
  },

  {
    id: "oop-49",
    question: "What is the Singleton Design Pattern?",
    answer:
      "The Singleton Pattern restricts a class to a single shared instance and provides a controlled way to access it. It can be useful for certain shared resources, but it should not be overused because it can introduce global state and make testing harder."
  },

  {
    id: "oop-50",
    question: "What is the difference between OOP and procedural programming?",
    answer:
      "Procedural programming organizes programs primarily around procedures or functions operating on data. OOP organizes software around objects that combine state and behavior. OOP can make large systems easier to model and maintain, while procedural programming can be simpler for straightforward algorithmic tasks."
  }
],
DBMS: [
  {
    id: "dbms-1",
    question: "What is a DBMS?",
    answer:
      "A Database Management System (DBMS) is software used to store, organize, retrieve, update, and manage data in databases. It provides mechanisms for data access, security, concurrency, transactions, and recovery."
  },

  {
    id: "dbms-2",
    question: "What is the difference between DBMS and RDBMS?",
    answer:
      "A DBMS is a general database management system, while an RDBMS is based on the relational model and stores data primarily in tables consisting of rows and columns. RDBMSs typically support relationships, keys, constraints, and SQL."
  },

  {
    id: "dbms-3",
    question: "What is a relational database?",
    answer:
      "A relational database stores data in tables called relations. Tables consist of rows representing records and columns representing attributes. Relationships between tables are typically represented using keys."
  },

  {
    id: "dbms-4",
    question: "What is a table, row, and column?",
    answer:
      "A table stores related data in a structured form. A row represents one record or tuple, while a column represents an attribute or field of that record. For example, a Student table could have columns student_id, name, and department."
  },

  {
    id: "dbms-5",
    question: "What is a primary key?",
    answer:
      "A primary key is a column or combination of columns that uniquely identifies each row in a table. It must be unique and cannot contain NULL values."
  },

  {
    id: "dbms-6",
    question: "What is a candidate key?",
    answer:
      "A candidate key is a minimal set of attributes that can uniquely identify each row in a table. A table can have multiple candidate keys, but one is selected as the primary key."
  },

  {
    id: "dbms-7",
    question: "What is a super key?",
    answer:
      "A super key is any set of one or more attributes that uniquely identifies a row. A candidate key is a minimal super key, meaning no attribute can be removed without losing uniqueness."
  },

  {
    id: "dbms-8",
    question: "What is a foreign key?",
    answer:
      "A foreign key is an attribute or set of attributes in one table that references a candidate or primary key in another table. It helps enforce referential integrity between related tables."
  },

  {
    id: "dbms-9",
    question: "What is the difference between primary key and foreign key?",
    answer:
      "A primary key uniquely identifies rows within its own table and cannot be NULL. A foreign key references a key in another table and is used to establish relationships. A foreign key may contain duplicate values and can sometimes be NULL depending on the schema constraints."
  },

  {
    id: "dbms-10",
    question: "What is a composite key?",
    answer:
      "A composite key consists of two or more columns used together to uniquely identify a row. For example, an Enrollment table might use (student_id, course_id) as a composite primary key."
  },

  {
    id: "dbms-11",
    question: "What are constraints in DBMS?",
    answer:
      "Constraints are rules that restrict the values stored in a database to maintain data integrity. Common constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, and DEFAULT."
  },

  {
    id: "dbms-12",
    question: "What is the difference between DELETE, DROP, and TRUNCATE?",
    answer:
      "DELETE removes selected rows and can use a WHERE clause. TRUNCATE removes all rows from a table while retaining the table structure. DROP removes the table itself, including its structure. Transaction and logging behavior can vary by DBMS."
  },

  {
    id: "dbms-13",
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is used to define, query, manipulate, and control data in relational databases. It includes commands for operations such as SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, and transaction control."
  },

  {
    id: "dbms-14",
    question: "What are DDL, DML, DCL, and TCL?",
    answer:
      "DDL (Data Definition Language) includes CREATE, ALTER, and DROP. DML (Data Manipulation Language) includes INSERT, UPDATE, and DELETE. DCL (Data Control Language) includes commands such as GRANT and REVOKE. TCL (Transaction Control Language) includes COMMIT, ROLLBACK, and SAVEPOINT."
  },

  {
    id: "dbms-15",
    question: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters individual rows before grouping, while HAVING filters groups after GROUP BY and aggregation. For example, WHERE can filter employees by department before grouping, while HAVING can filter departments whose average salary exceeds a value."
  },

  {
    id: "dbms-16",
    question: "What is GROUP BY?",
    answer:
      "GROUP BY groups rows that have the same values in specified columns so aggregate functions can be applied to each group. For example, SELECT department, COUNT(*) FROM Employee GROUP BY department."
  },

  {
    id: "dbms-17",
    question: "What are aggregate functions in SQL?",
    answer:
      "Aggregate functions calculate a value from multiple rows. Common examples are COUNT(), SUM(), AVG(), MIN(), and MAX(). They are frequently used with GROUP BY."
  },

  {
    id: "dbms-18",
    question: "What is the difference between COUNT(*) and COUNT(column)?",
    answer:
      "COUNT(*) counts rows, including rows where particular columns contain NULL. COUNT(column) counts only non-NULL values in that column."
  },

  {
    id: "dbms-19",
    question: "What is a JOIN?",
    answer:
      "A JOIN combines rows from multiple tables based on a related condition. Joins are used to retrieve related information stored across normalized tables."
  },

  {
    id: "dbms-20",
    question: "What is an INNER JOIN?",
    answer:
      "An INNER JOIN returns only rows for which the join condition matches in both tables. For example, joining Employee and Department on department_id returns employees whose department has a matching record."
  },

  {
    id: "dbms-21",
    question: "What is a LEFT JOIN?",
    answer:
      "A LEFT JOIN returns every row from the left table and matching rows from the right table. If no matching right-side row exists, the right-side columns contain NULL values."
  },

  {
    id: "dbms-22",
    question: "What is the difference between LEFT JOIN and INNER JOIN?",
    answer:
      "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table even when there is no matching row in the right table."
  },

  {
    id: "dbms-23",
    question: "What is a self join?",
    answer:
      "A self join joins a table with itself. It is useful when rows in the same table have relationships with each other. For example, an Employee table can be self-joined to find each employee's manager."
  },

  {
    id: "dbms-24",
    question: "What is a subquery?",
    answer:
      "A subquery is a query nested inside another SQL query. It can be used in SELECT, FROM, WHERE, or HAVING clauses depending on the DBMS and query structure."
  },

  {
    id: "dbms-25",
    question: "What is a correlated subquery?",
    answer:
      "A correlated subquery references columns from the outer query, so its evaluation depends on the current row or group of the outer query. It can be useful for row-by-row comparisons but may be less efficient than an equivalent join or other formulation."
  },

  {
    id: "dbms-26",
    question: "What is normalization?",
    answer:
      "Normalization is the process of organizing relational data to reduce unnecessary redundancy and avoid update anomalies. It typically involves decomposing tables according to functional dependencies while preserving desirable properties."
  },

  {
    id: "dbms-27",
    question: "What is First Normal Form (1NF)?",
    answer:
      "A relation is in 1NF when each attribute contains atomic values according to the chosen relational model and there are no repeating groups. For example, storing multiple phone numbers as separate rows rather than as a comma-separated list helps satisfy atomicity."
  },

  {
    id: "dbms-28",
    question: "What is Second Normal Form (2NF)?",
    answer:
      "A relation is in 2NF if it is in 1NF and every non-key attribute is fully functionally dependent on the entire candidate key. It mainly addresses partial dependencies when a candidate key contains multiple attributes."
  },

  {
    id: "dbms-29",
    question: "What is Third Normal Form (3NF)?",
    answer:
      "A relation is in 3NF if it is in 2NF and non-key attributes do not depend transitively on a candidate key through another non-key attribute. Informally, non-key attributes should depend on the key, the whole key, and not on another non-key attribute."
  },

  {
    id: "dbms-30",
    question: "What is BCNF?",
    answer:
      "Boyce-Codd Normal Form (BCNF) requires that for every non-trivial functional dependency X → Y, X must be a super key. BCNF is stricter than 3NF and can eliminate certain redundancies that 3NF allows."
  },

  {
    id: "dbms-31",
    question: "What is a functional dependency?",
    answer:
      "A functional dependency X → Y means that the value of attribute set X uniquely determines the value of attribute set Y. For example, student_id → student_name means a student's ID determines that student's name."
  },

  {
    id: "dbms-32",
    question: "What are insertion, update, and deletion anomalies?",
    answer:
      "Insertion anomaly occurs when new information cannot be inserted without unrelated information. Update anomaly occurs when the same fact must be changed in multiple places. Deletion anomaly occurs when deleting one fact accidentally removes another useful fact. Normalization helps reduce these problems."
  },

  {
    id: "dbms-33",
    question: "What is a transaction?",
    answer:
      "A transaction is a sequence of database operations treated as one logical unit of work. It should preserve database correctness even when multiple users operate concurrently or failures occur."
  },

  {
    id: "dbms-34",
    question: "What are ACID properties?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity means a transaction is all-or-nothing. Consistency preserves database constraints. Isolation controls interaction between concurrent transactions. Durability ensures committed changes survive failures."
  },

  {
    id: "dbms-35",
    question: "What is COMMIT?",
    answer:
      "COMMIT permanently makes the changes of the current transaction visible according to the DBMS's transaction semantics. After a successful commit, the transaction's changes are considered completed and generally cannot be undone using a normal ROLLBACK."
  },

  {
    id: "dbms-36",
    question: "What is ROLLBACK?",
    answer:
      "ROLLBACK undoes changes made by the current transaction that have not been committed. It is useful when an error occurs or when a transaction should be cancelled."
  },

  {
    id: "dbms-37",
    question: "What is concurrency control?",
    answer:
      "Concurrency control manages simultaneous transactions so that their execution does not violate database correctness. It helps prevent problems such as lost updates, dirty reads, and inconsistent results."
  },

  {
    id: "dbms-38",
    question: "What is a dirty read?",
    answer:
      "A dirty read occurs when one transaction reads data written by another transaction before that transaction commits. If the writing transaction later rolls back, the first transaction has read data that never became permanent."
  },

  {
    id: "dbms-39",
    question: "What is a lost update?",
    answer:
      "A lost update occurs when two concurrent transactions read and modify the same data, causing one transaction's update to overwrite the other's update."
  },

  {
    id: "dbms-40",
    question: "What are isolation levels?",
    answer:
      "Isolation levels determine how much one transaction can observe the effects of concurrent transactions. Common SQL isolation levels are Read Uncommitted, Read Committed, Repeatable Read, and Serializable, with increasing isolation generally requiring stronger concurrency control."
  },

  {
    id: "dbms-41",
    question: "What is an index in a database?",
    answer:
      "An index is an auxiliary data structure that allows the DBMS to find rows more efficiently without scanning the entire table. Indexes can significantly improve read performance but consume storage and add overhead to inserts, updates, and deletes."
  },

  {
    id: "dbms-42",
    question: "What is the difference between clustered and non-clustered indexes?",
    answer:
      "A clustered index determines how table rows are physically or logically organized according to the DBMS's implementation, while a non-clustered index is a separate structure containing keys and references to rows. The exact semantics and terminology vary across database systems."
  },

  {
    id: "dbms-43",
    question: "Why can too many indexes be harmful?",
    answer:
      "Indexes improve reads but require additional storage and must be maintained when rows are inserted, updated, or deleted. Having many unnecessary indexes can therefore slow write operations and increase storage usage."
  },

  {
    id: "dbms-44",
    question: "What is a view?",
    answer:
      "A view is a virtual table defined by a query. It generally stores the query definition rather than a separate copy of the underlying data. Views can simplify complex queries and restrict access to selected columns or rows."
  },

  {
    id: "dbms-45",
    question: "What is a stored procedure?",
    answer:
      "A stored procedure is a named program stored and executed within the database system. It can contain SQL statements and procedural logic depending on the DBMS. Stored procedures can centralize database operations and reduce repeated application-side logic."
  },

  {
    id: "dbms-46",
    question: "What is a trigger?",
    answer:
      "A trigger is database logic that automatically executes when specified events occur, such as INSERT, UPDATE, or DELETE. Triggers can enforce certain rules or maintain derived information, but excessive use can make database behavior harder to understand."
  },

  {
    id: "dbms-47",
    question: "What is a deadlock in DBMS?",
    answer:
      "A deadlock occurs when two or more transactions wait indefinitely for resources held by each other. For example, Transaction A holds Lock 1 and waits for Lock 2, while Transaction B holds Lock 2 and waits for Lock 1."
  },

  {
    id: "dbms-48",
    question: "What is a database deadlock prevention or detection technique?",
    answer:
      "Deadlocks can be addressed using techniques such as lock ordering, timeouts, deadlock detection, and transaction rollback. Detection can identify cycles in a wait-for graph, after which one or more transactions can be aborted to break the cycle."
  },

  {
    id: "dbms-49",
    question: "What is the difference between UNION and UNION ALL?",
    answer:
      "UNION combines the results of compatible SELECT queries and removes duplicate rows. UNION ALL combines the results without removing duplicates and is generally faster because it avoids duplicate elimination."
  },

  {
    id: "dbms-50",
    question: "Write a query to find the second-highest salary from an Employee table.",
    answer:
      "One common approach is: SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee); Another approach uses DENSE_RANK() or ORDER BY with an appropriate LIMIT/OFFSET depending on the SQL dialect. Using DENSE_RANK() is often preferable when duplicate salaries need to be handled explicitly."
  }
],
Java: [
  {
    id: "java-1",
    question: "What is Java and what are its main features?",
    answer:
      "Java is a high-level, class-based, object-oriented programming language designed to be portable across platforms through the JVM. Important features include platform independence, object orientation, automatic garbage collection, strong type checking, exception handling, multithreading, security, and a rich standard library."
  },

  {
    id: "java-2",
    question: "Why is Java platform independent?",
    answer:
      "Java source code is compiled into platform-independent bytecode stored in .class files. The Java Virtual Machine (JVM) executes this bytecode on the target operating system. Therefore, the same compiled bytecode can run on different platforms that have compatible JVM implementations."
  },

  {
    id: "java-3",
    question: "What is the difference between JDK, JRE, and JVM?",
    answer:
      "JVM executes Java bytecode. JRE provides the JVM plus libraries and components required to run Java applications. JDK includes the JRE plus development tools such as the Java compiler (javac), debugger, and other utilities. Modern Java distributions may package these components differently, but the conceptual distinction is useful for interviews."
  },

  {
    id: "java-4",
    question: "What happens when a Java program is compiled and executed?",
    answer:
      "The .java source file is compiled by javac into bytecode stored in a .class file. The JVM loads the bytecode, verifies it, and executes it using interpretation and/or Just-In-Time (JIT) compilation. The JVM manages runtime memory and garbage collection."
  },

  {
    id: "java-5",
    question: "What is the JVM?",
    answer:
      "The Java Virtual Machine is the runtime environment responsible for loading, verifying, and executing Java bytecode. It also manages runtime memory areas, garbage collection, threads, and other execution-related tasks."
  },

  {
    id: "java-6",
    question: "What is the difference between primitive and reference data types in Java?",
    answer:
      "Primitive types directly represent simple values, such as int, char, boolean, and double. Reference types represent references to objects, such as String, arrays, and user-defined classes. Primitive variables do not contain object references."
  },

  {
    id: "java-7",
    question: "What are Java's primitive data types?",
    answer:
      "Java has eight primitive types: byte, short, int, long, float, double, char, and boolean. Numeric types include byte, short, int, long, float, and double; char represents a UTF-16 code unit; boolean represents true or false."
  },

  {
    id: "java-8",
    question: "What is autoboxing and unboxing?",
    answer:
      "Autoboxing automatically converts a primitive value into its corresponding wrapper object, such as int to Integer. Unboxing converts a wrapper object back to its primitive type. Example: Integer x = 10; int y = x;"
  },

  {
    id: "java-9",
    question: "What are wrapper classes?",
    answer:
      "Wrapper classes represent primitive values as objects. Examples include Integer for int, Double for double, Character for char, and Boolean for boolean. They are useful when an object is required, such as in generic collections."
  },

  {
    id: "java-10",
    question: "Why is String immutable in Java?",
    answer:
      "A String object cannot be changed after it is created. Immutability makes Strings safer to share, supports string-pool optimizations, makes their hash codes stable, and helps with security and thread-safety. Operations that appear to modify a String create another String."
  },

  {
    id: "java-11",
    question: "What is the String pool?",
    answer:
      "The String pool is a special area used by the JVM to reuse certain String objects with the same contents. String literals are typically interned, so identical literals can refer to the same pooled object."
  },

  {
    id: "java-12",
    question: "What is the difference between == and equals() in Java?",
    answer:
      "For object references, == checks whether two references refer to the same object. equals() is intended to check logical equality according to the class's implementation. For example, two separately created Strings can be equal using equals() while == is false."
  },

  {
    id: "java-13",
    question: "What is the difference between String, StringBuilder, and StringBuffer?",
    answer:
      "String is immutable. StringBuilder is mutable and is generally preferred for repeated string modifications in single-threaded code. StringBuffer is also mutable but provides synchronized methods, making it generally safer for certain concurrent uses but potentially slower."
  },

  {
    id: "java-14",
    question: "What is a class and what is an object in Java?",
    answer:
      "A class defines the structure and behavior of objects. An object is an instance of a class created at runtime. For example, Car can be a class, while a particular red Car object is an instance of that class."
  },

  {
    id: "java-15",
    question: "What are the four pillars of OOP in Java?",
    answer:
      "The four commonly discussed principles are Encapsulation, Abstraction, Inheritance, and Polymorphism. Encapsulation controls access to state, abstraction hides implementation details, inheritance enables reuse through class relationships, and polymorphism allows different implementations behind a common interface."
  },

  {
    id: "java-16",
    question: "What is method overloading in Java?",
    answer:
      "Method overloading means defining multiple methods with the same name but different parameter lists. The compiler determines which overloaded method is called based on the arguments. Changing only the return type is not sufficient to overload a method."
  },

  {
    id: "java-17",
    question: "What is method overriding in Java?",
    answer:
      "Method overriding occurs when a subclass provides a compatible implementation of an inherited instance method. It enables runtime polymorphism. The overriding method cannot reduce access and must follow Java's rules for compatible return types and exceptions."
  },

  {
    id: "java-18",
    question: "Can static methods be overridden in Java?",
    answer:
      "No. Static methods belong to the class rather than an individual object, so they are hidden rather than overridden. If a subclass declares a static method with the same signature, the method selected depends on the reference type rather than runtime polymorphism."
  },

  {
    id: "java-19",
    question: "Can constructors be inherited or overridden?",
    answer:
      "Constructors are not inherited and cannot be overridden. A subclass constructor can invoke a superclass constructor using super(), either explicitly or implicitly when allowed."
  },

  {
    id: "java-20",
    question: "What is the difference between this and super in Java?",
    answer:
      "this refers to the current object and can be used to access instance members or invoke another constructor in the same class. super refers to the superclass portion of the current object and can be used to access superclass members or invoke a superclass constructor."
  },

  {
    id: "java-21",
    question: "What is the difference between an abstract class and an interface?",
    answer:
      "An abstract class can contain state, constructors, concrete methods, and abstract methods. An interface primarily defines a contract and supports multiple implementation. Modern Java interfaces can also contain default, static, and private methods."
  },

  {
    id: "java-22",
    question: "What is the final keyword?",
    answer:
      "A final variable can be assigned only once. A final method cannot be overridden. A final class cannot be extended. For example, String is a final class in Java."
  },

  {
    id: "java-23",
    question: "What is the static keyword?",
    answer:
      "static indicates that a member belongs to the class rather than individual instances. Static variables are shared among instances, and static methods can be called without creating an object. A static method cannot directly access instance fields without an object reference."
  },

  {
    id: "java-24",
    question: "What are access modifiers in Java?",
    answer:
      "Java provides public, protected, package-private (default), and private access levels. Public members are broadly accessible, private members are restricted to their class, protected members have package and subclass access rules, and package-private members are accessible within the same package."
  },

  {
    id: "java-25",
    question: "What is encapsulation and how is it implemented in Java?",
    answer:
      "Encapsulation bundles data and behavior while controlling access to internal state. It is commonly implemented by declaring fields private and exposing controlled methods such as getters, setters, or domain-specific operations."
  },

  {
    id: "java-26",
    question: "What is inheritance in Java?",
    answer:
      "Inheritance allows one class to derive from another using extends. The subclass inherits accessible members and can add or override behavior. Java supports single inheritance for classes but allows a class to implement multiple interfaces."
  },

  {
    id: "java-27",
    question: "What is the Java Collections Framework?",
    answer:
      "The Collections Framework provides interfaces and implementations for storing and manipulating groups of objects. Important interfaces include List, Set, Queue, Deque, and Map, with implementations such as ArrayList, LinkedList, HashSet, TreeSet, HashMap, and TreeMap."
  },

  {
    id: "java-28",
    question: "What is the difference between ArrayList and LinkedList?",
    answer:
      "ArrayList is backed by a dynamically resizable array and provides fast indexed access, typically O(1). LinkedList is node-based and provides efficient insertion/removal at known ends or nodes, but indexed access is O(n). In practice, ArrayList is the common default choice for most list use cases."
  },

  {
    id: "java-29",
    question: "What is the difference between ArrayList and array?",
    answer:
      "An array has a fixed length once created and can store primitives directly. ArrayList is dynamically resizable and stores objects, using wrapper types for primitives. ArrayList provides convenient collection methods but introduces some object/reference overhead."
  },

  {
    id: "java-30",
    question: "What is the difference between HashSet, LinkedHashSet, and TreeSet?",
    answer:
      "HashSet stores unique elements without guaranteeing iteration order and typically provides O(1) average insertion and lookup. LinkedHashSet preserves insertion order. TreeSet maintains elements according to their natural ordering or a Comparator and typically provides O(log n) operations."
  },

  {
    id: "java-31",
    question: "What is the difference between HashMap, LinkedHashMap, and TreeMap?",
    answer:
      "HashMap provides average O(1) key lookup and does not guarantee iteration order. LinkedHashMap maintains a predictable insertion-order or access-order iteration. TreeMap stores keys in sorted order and typically provides O(log n) operations."
  },

  {
    id: "java-32",
    question: "How does HashMap work internally?",
    answer:
      "HashMap uses a hash function to determine a bucket for a key. If multiple keys map to the same bucket, collisions are handled using internal structures. In modern Java implementations, heavily populated buckets can be treeified under appropriate conditions, improving worst-case lookup behavior compared with a long linked chain."
  },

  {
    id: "java-33",
    question: "Why should equals() and hashCode() be overridden together?",
    answer:
      "The contract requires that if two objects are equal according to equals(), they must return the same hashCode(). If equals() is overridden without correctly overriding hashCode(), hash-based collections such as HashMap and HashSet may behave incorrectly."
  },

  {
    id: "java-34",
    question: "What is the difference between Comparable and Comparator?",
    answer:
      "Comparable defines a class's natural ordering through compareTo(). Comparator defines an external or alternative ordering through compare(). Comparator is useful when the same class needs to be sorted in multiple ways."
  },

  {
    id: "java-35",
    question: "What are generics in Java?",
    answer:
      "Generics allow classes, interfaces, and methods to operate on parameterized types while providing compile-time type safety. For example, List<String> ensures that the list is intended to contain Strings and reduces the need for explicit casts."
  },

  {
    id: "java-36",
    question: "What is type erasure in Java generics?",
    answer:
      "Java implements generics largely through type erasure. Generic type information is primarily used by the compiler for type checking and is generally not retained as the same generic type information at runtime. This maintains compatibility with older Java code."
  },

  {
    id: "java-37",
    question: "What is exception handling in Java?",
    answer:
      "Exception handling allows a program to detect and manage abnormal conditions without necessarily terminating abruptly. Java provides try, catch, finally, throw, and throws for handling and propagating exceptions."
  },

  {
    id: "java-38",
    question: "What is the difference between checked and unchecked exceptions?",
    answer:
      "Checked exceptions are exceptions that the compiler requires the program to handle or declare, such as many subclasses of Exception other than RuntimeException. Unchecked exceptions include RuntimeException and its subclasses and are not subject to this compile-time requirement."
  },

  {
    id: "java-39",
    question: "What is the difference between throw and throws?",
    answer:
      "throw is used to explicitly throw a particular exception object. throws is used in a method declaration to indicate exceptions that the method may propagate to its caller."
  },

  {
    id: "java-40",
    question: "What is the purpose of finally?",
    answer:
      "The finally block is intended for cleanup code that should execute after try/catch processing, such as releasing certain resources. However, try-with-resources is generally preferred for closing AutoCloseable resources."
  },

  {
    id: "java-41",
    question: "What is try-with-resources?",
    answer:
      "Try-with-resources automatically closes objects implementing AutoCloseable after the try block completes. It is commonly used with files, streams, database resources, and other resources that need deterministic cleanup."
  },

  {
    id: "java-42",
    question: "What is multithreading in Java?",
    answer:
      "Multithreading allows multiple threads of execution to run within a process. Java provides Thread, Runnable, Callable, ExecutorService, synchronization mechanisms, and concurrent collections for building multithreaded applications."
  },

  {
    id: "java-43",
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is an independent executing program with its own address space. Threads are execution units within a process and typically share the process's memory. Threads are lighter-weight than processes but require synchronization when accessing shared mutable state."
  },

  {
    id: "java-44",
    question: "What is the difference between start() and run() in a Java Thread?",
    answer:
      "Calling start() asks the JVM to create and schedule a new thread of execution, which then invokes run(). Calling run() directly is simply a normal method call and does not create a new thread."
  },

  {
    id: "java-45",
    question: "What is synchronization in Java?",
    answer:
      "Synchronization controls access to shared resources so that multiple threads do not execute conflicting critical sections simultaneously. Java provides synchronized methods/blocks and other concurrency utilities such as Lock implementations."
  },

  {
    id: "java-46",
    question: "What is the difference between synchronized and volatile?",
    answer:
      "synchronized provides mutual exclusion and establishes important memory-visibility guarantees around synchronized operations. volatile ensures reads and writes of a variable have specified visibility and ordering semantics across threads, but it does not make compound operations such as count++ atomic."
  },

  {
    id: "java-47",
    question: "What is deadlock in multithreading?",
    answer:
      "A deadlock occurs when threads wait indefinitely for locks held by each other. For example, Thread A holds Lock 1 and waits for Lock 2 while Thread B holds Lock 2 and waits for Lock 1. Consistent lock ordering can help prevent deadlocks."
  },

  {
    id: "java-48",
    question: "What are lambda expressions in Java?",
    answer:
      "Lambda expressions provide a concise way to represent behavior as a function-like value. They are commonly used with functional interfaces, Streams, and collection operations. Example: list.forEach(x -> System.out.println(x));"
  },

  {
    id: "java-49",
    question: "What is the Java Stream API?",
    answer:
      "The Stream API provides a declarative way to process sequences of data. Common operations include filter(), map(), sorted(), distinct(), reduce(), collect(), and forEach(). Intermediate operations are generally lazy, while terminal operations trigger stream processing."
  },

  {
    id: "java-50",
    question: "What are some common Java interview traps?",
    answer:
      "Important traps include comparing Strings with == instead of equals(), forgetting the equals()/hashCode() contract, confusing ArrayList and LinkedList complexities, calling run() instead of start(), assuming volatile makes operations atomic, modifying a collection incorrectly during iteration, confusing overloading with overriding, and assuming HashMap preserves insertion order."
  }
],
Fullstack: [
  // =========================
  // HTML
  // =========================

  {
    id: "fs-1",
    question: "What is HTML and what is its role in a web application?",
    answer:
      "HTML (HyperText Markup Language) defines the structure and meaning of content on a web page. It describes elements such as headings, paragraphs, forms, images, links, tables, and semantic sections. CSS handles presentation, while JavaScript handles behavior and interactivity."
  },

  {
    id: "fs-2",
    question: "What is semantic HTML?",
    answer:
      "Semantic HTML uses elements that describe the meaning of their content, such as <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>. It improves accessibility, SEO, readability, and maintainability compared with using generic <div> elements everywhere."
  },

  {
    id: "fs-3",
    question: "What is the difference between div and span?",
    answer:
      "<div> is a generic block-level container, while <span> is a generic inline container. Neither conveys specific semantic meaning. They are commonly used when a suitable semantic HTML element does not exist."
  },

  {
    id: "fs-4",
    question: "What is the difference between block-level and inline elements?",
    answer:
      "Block-level elements generally begin on a new line and can take available horizontal space, while inline elements generally flow within surrounding text. Examples include <div> as a block container and <span> as an inline container. CSS can change how elements are displayed."
  },

  {
    id: "fs-5",
    question: "What is the difference between id and class in HTML?",
    answer:
      "An id identifies a specific element and should generally be unique within a document. A class can be assigned to multiple elements and is commonly used to group elements for styling or behavior. CSS selects an id using # and a class using ."
  },

  {
    id: "fs-6",
    question: "What is the purpose of the alt attribute in an image?",
    answer:
      "The alt attribute provides alternative text describing an image. Screen readers can use it for accessibility, and it can be displayed when the image cannot be loaded. Decorative images can generally use an empty alt attribute."
  },

  {
    id: "fs-7",
    question: "What are HTML forms and common form controls?",
    answer:
      "Forms collect user input and can submit data to a server. Common controls include input, textarea, select, option, checkbox, radio buttons, and button. Important attributes include name, value, required, placeholder, type, and autocomplete."
  },

  {
    id: "fs-8",
    question: "What is the difference between localStorage, sessionStorage, and cookies?",
    answer:
      "localStorage stores data in the browser with persistence until explicitly removed. sessionStorage generally lasts for the lifetime of the browser tab/session. Cookies are small pieces of data associated with HTTP requests and can be configured with attributes such as HttpOnly, Secure, SameSite, and expiration."
  },

  // =========================
  // CSS
  // =========================

  {
    id: "fs-9",
    question: "What is CSS and what is the CSS box model?",
    answer:
      "CSS (Cascading Style Sheets) controls the presentation and layout of HTML elements. The box model consists of content, padding, border, and margin. By default, width and height generally apply to the content box unless box-sizing is changed."
  },

  {
    id: "fs-10",
    question: "What is the difference between margin and padding?",
    answer:
      "Padding is the space between an element's content and its border. Margin is the space outside the border that separates the element from surrounding elements."
  },

  {
    id: "fs-11",
    question: "What is CSS specificity?",
    answer:
      "Specificity determines which CSS rule wins when multiple rules target the same element. In general, inline styles have higher specificity than IDs, IDs higher than classes/attributes/pseudo-classes, and those higher than element selectors. Source order also matters when specificity is equal."
  },

  {
    id: "fs-12",
    question: "What is the difference between position: relative, absolute, fixed, and sticky?",
    answer:
      "relative keeps the element in normal flow while allowing positional offsets. absolute removes the element from normal flow and positions it relative to an appropriate containing block. fixed positions the element relative to the viewport. sticky behaves like a relatively positioned element until a specified scroll threshold is reached, after which it sticks within its containing block."
  },

  {
    id: "fs-13",
    question: "What is Flexbox?",
    answer:
      "Flexbox is a one-dimensional CSS layout system designed to arrange elements along a row or column. Important properties include display:flex, flex-direction, justify-content, align-items, flex-wrap, flex-grow, flex-shrink, and gap."
  },

  {
    id: "fs-14",
    question: "What is CSS Grid?",
    answer:
      "CSS Grid is a two-dimensional layout system that handles rows and columns. It is useful for complex page layouts. Common properties include grid-template-columns, grid-template-rows, gap, grid-column, and grid-row."
  },

  {
    id: "fs-15",
    question: "What is responsive web design?",
    answer:
      "Responsive design allows a web application to adapt to different screen sizes and devices. Common techniques include flexible layouts, relative units, responsive images, Flexbox, Grid, and CSS media queries."
  },

  {
    id: "fs-16",
    question: "What are pseudo-classes and pseudo-elements?",
    answer:
      "Pseudo-classes represent a state or condition, such as :hover, :focus, :checked, and :first-child. Pseudo-elements represent a part of an element or generated content, such as ::before and ::after."
  },

  // =========================
  // JAVASCRIPT
  // =========================

  {
    id: "fs-17",
    question: "What is JavaScript and how does it differ from Java?",
    answer:
      "JavaScript is a dynamically typed programming language widely used for browser and server-side development. Java is a separate, statically typed programming language. Despite the similar names, they have different language designs, runtimes, and ecosystems."
  },

  {
    id: "fs-18",
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared within the same scope. let and const are block-scoped. let allows reassignment, while const prevents reassignment of the binding. const does not make referenced objects immutable."
  },

  {
    id: "fs-19",
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting describes how JavaScript declarations are processed before code execution. Function declarations can generally be called before their declaration. var declarations are initialized with undefined, while let and const exist in the Temporal Dead Zone until execution reaches their declaration."
  },

  {
    id: "fs-20",
    question: "What is the difference between == and ===?",
    answer:
      "== performs loose equality and may perform type coercion before comparison. === performs strict equality without implicit type conversion. For predictable comparisons, === is generally preferred unless loose equality is intentionally desired."
  },

  {
    id: "fs-21",
    question: "What are primitive and reference values in JavaScript?",
    answer:
      "Primitive values include string, number, bigint, boolean, undefined, symbol, and null. Objects, arrays, and functions are reference values. Variables containing object values hold references to objects rather than containing the object's structure directly."
  },

  {
    id: "fs-22",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure occurs when a function retains access to variables from its surrounding lexical scope even after that outer function has finished executing. Closures are commonly used for private state, callbacks, factories, and event handlers."
  },

  {
    id: "fs-23",
    question: "What is lexical scope?",
    answer:
      "Lexical scope means that variable accessibility is determined by where code is written in the source rather than where a function is called. Nested functions can access variables from their surrounding lexical scopes."
  },

  {
    id: "fs-24",
    question: "What is the difference between function declaration, function expression, and arrow function?",
    answer:
      "A function declaration defines a named function directly. A function expression assigns a function to a variable. An arrow function provides shorter syntax and has lexical this behavior, meaning it does not create its own this binding."
  },

  {
    id: "fs-25",
    question: "How does this work in JavaScript?",
    answer:
      "The value of this depends primarily on how a function is called. In a method call it generally refers to the receiver object. In constructor calls it refers to the newly created object. Arrow functions do not have their own this and capture it lexically from the surrounding scope."
  },

  {
    id: "fs-26",
    question: "What are call(), apply(), and bind()?",
    answer:
      "call() invokes a function with a specified this value and individual arguments. apply() does the same but accepts arguments as an array-like value. bind() returns a new function with this and optionally some arguments pre-bound."
  },

  {
    id: "fs-27",
    question: "What is the difference between shallow copy and deep copy in JavaScript?",
    answer:
      "A shallow copy copies the top-level structure but nested objects remain shared references. A deep copy recursively creates independent nested data. Common approaches include structuredClone() for supported values or carefully designed serialization/custom cloning when appropriate."
  },

  {
    id: "fs-28",
    question: "What are map(), filter(), and reduce()?",
    answer:
      "map() transforms each element and returns a new array. filter() returns elements satisfying a condition. reduce() combines elements into a single accumulated result. These methods are fundamental functional-programming tools in JavaScript."
  },

  {
    id: "fs-29",
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring allows values to be extracted from arrays or properties from objects into variables. Example: const { name, age } = user; It is commonly used with function parameters, API responses, and React props."
  },

  {
    id: "fs-30",
    question: "What are spread and rest operators?",
    answer:
      "The ... syntax is used as spread when expanding elements of an iterable or properties of an object, and as rest when collecting remaining arguments or properties. Example: const copy = [...arr]; and function sum(...nums) {}."
  },

  {
    id: "fs-31",
    question: "What is a Promise?",
    answer:
      "A Promise represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected. Promises can be handled using .then(), .catch(), and .finally(), or with async/await."
  },

  {
    id: "fs-32",
    question: "What is async/await?",
    answer:
      "async/await provides syntax for working with Promises in a sequential-looking style. An async function returns a Promise, and await pauses that async function until the awaited Promise settles. It does not block the JavaScript event loop."
  },

  {
    id: "fs-33",
    question: "What is the JavaScript event loop?",
    answer:
      "The event loop coordinates execution of JavaScript code with asynchronous tasks. Synchronous code runs on the call stack. Once the stack is clear, queued asynchronous callbacks and jobs can be processed according to the runtime's scheduling rules. Promise reactions use the microtask queue."
  },

  {
    id: "fs-34",
    question: "What is the difference between microtasks and macrotasks?",
    answer:
      "Promise callbacks and queueMicrotask() use the microtask queue. Timers and many I/O callbacks are scheduled through task or macrotask mechanisms. After the current synchronous work finishes, microtasks are generally processed before the next task is taken."
  },

  {
    id: "fs-35",
    question: "What is event bubbling and event capturing?",
    answer:
      "Event capturing moves through the DOM from the outer ancestors toward the target. Bubbling moves from the target back toward its ancestors. Event listeners can be configured to participate in the capture phase."
  },

  {
    id: "fs-36",
    question: "What is event delegation?",
    answer:
      "Event delegation attaches a handler to a parent rather than individual child elements and uses event bubbling to determine which child triggered the event. It is useful for dynamically generated elements and can reduce the number of event listeners."
  },

  {
    id: "fs-37",
    question: "What is debounce vs throttle?",
    answer:
      "Debouncing delays execution until a period of inactivity, making it useful for search input or resize events. Throttling limits execution to at most a certain frequency, making it useful for scroll or mouse-move events."
  },

  {
    id: "fs-38",
    question: "What is JSON?",
    answer:
      "JSON (JavaScript Object Notation) is a text-based data interchange format commonly used for APIs. It supports objects, arrays, strings, numbers, booleans, and null. JSON.stringify() converts a JavaScript value to JSON text, while JSON.parse() converts JSON text to a JavaScript value."
  },

  // =========================
  // NODE.JS
  // =========================

  {
    id: "fs-39",
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on the V8 engine that allows JavaScript to run outside the browser. It is commonly used for servers, APIs, command-line tools, and real-time applications."
  },

  {
    id: "fs-40",
    question: "Why is Node.js commonly used for backend development?",
    answer:
      "Node.js provides an event-driven, non-blocking I/O model that works well for I/O-heavy applications such as APIs and real-time services. It also allows teams to use JavaScript across both frontend and backend."
  },

  {
    id: "fs-41",
    question: "Is Node.js single-threaded?",
    answer:
      "JavaScript execution in Node.js primarily occurs on a main thread, but Node.js can use additional threads and operating-system facilities for certain tasks. Its asynchronous I/O model allows many concurrent I/O operations without requiring one JavaScript thread per request."
  },

  {
    id: "fs-42",
    question: "What is npm?",
    answer:
      "npm is the package manager commonly used with Node.js. It manages project dependencies, scripts, package metadata, and package installation through the package.json file."
  },

  {
    id: "fs-43",
    question: "What is package.json?",
    answer:
      "package.json describes a Node.js project's metadata, dependencies, scripts, version, and configuration. Common scripts include commands such as npm start, npm test, and npm run build."
  },

  {
    id: "fs-44",
    question: "What is the difference between dependencies and devDependencies?",
    answer:
      "dependencies are packages required by the application at runtime. devDependencies are primarily required during development, testing, building, or tooling. npm install --save-dev is commonly used to add a development dependency."
  },

  {
    id: "fs-45",
    question: "What are Node.js modules?",
    answer:
      "Modules allow code to be organized into reusable units. Node.js supports its traditional CommonJS module system using require() and module.exports, as well as ECMAScript Modules using import and export."
  },

  {
    id: "fs-46",
    question: "What is the Node.js event-driven architecture?",
    answer:
      "Node.js applications commonly use an event-driven model where operations such as network or file-system I/O can be initiated asynchronously. Completion events, callbacks, or Promise continuations allow the application to continue processing other work rather than synchronously waiting."
  },

  // =========================
  // EXPRESS.JS
  // =========================

  {
    id: "fs-47",
    question: "What is Express.js?",
    answer:
      "Express.js is a lightweight web framework for Node.js. It provides routing, middleware support, request/response handling, and utilities for building HTTP APIs and web applications."
  },

  {
    id: "fs-48",
    question: "What is middleware in Express?",
    answer:
      "Middleware is a function that has access to the request, response, and next function. It can modify the request or response, perform authentication or logging, terminate the request, or call next() to continue processing."
  },

  {
    id: "fs-49",
    question: "What is the purpose of next() in Express middleware?",
    answer:
      "next() passes control to the next matching middleware or route handler. If middleware neither sends a response nor calls next(), the request can remain unresolved."
  },

  {
    id: "fs-50",
    question: "What is routing in Express?",
    answer:
      "Routing determines how an application responds to requests for particular HTTP methods and URL paths. Express provides methods such as app.get(), app.post(), app.put(), app.patch(), and app.delete() for defining routes."
  },

  {
    id: "fs-51",
    question: "What are REST APIs and common HTTP methods?",
    answer:
      "REST is an architectural style commonly used for web APIs. GET is generally used to retrieve resources, POST to create/process data, PUT to replace a resource, PATCH to partially update a resource, and DELETE to remove a resource."
  },

  {
    id: "fs-52",
    question: "What are HTTP status codes commonly used in APIs?",
    answer:
      "2xx indicates success, such as 200 OK and 201 Created. 3xx indicates redirection. 4xx indicates a client-side issue, such as 400 Bad Request, 401 Unauthorized, 403 Forbidden, and 404 Not Found. 5xx indicates server-side errors, such as 500 Internal Server Error."
  },

  {
    id: "fs-53",
    question: "How do you handle errors in Express?",
    answer:
      "Express supports error-handling middleware with four parameters: (err, req, res, next). Errors can be passed using next(err), and centralized error-handling middleware can produce consistent API responses and logging."
  },

  {
    id: "fs-54",
    question: "What is CORS?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web page from one origin can access resources from another origin. Servers can provide CORS response headers to explicitly allow appropriate cross-origin requests."
  },

  // =========================
  // MONGODB
  // =========================

  {
    id: "fs-55",
    question: "What is MongoDB?",
    answer:
      "MongoDB is a document-oriented NoSQL database that stores data as BSON documents in collections. It is schema-flexible compared with traditional relational databases and supports indexing, aggregation, replication, and transactions."
  },

  {
    id: "fs-56",
    question: "What is a MongoDB document and collection?",
    answer:
      "A document is a BSON representation of a record containing fields and values. A collection is a group of related documents and is roughly analogous to a table in a relational database."
  },

  {
    id: "fs-57",
    question: "What is BSON?",
    answer:
      "BSON stands for Binary JSON. It is a binary-encoded document format used internally by MongoDB that supports JSON-like structures along with additional data types such as ObjectId and Date."
  },

  {
    id: "fs-58",
    question: "What is ObjectId in MongoDB?",
    answer:
      "ObjectId is a commonly used identifier type for MongoDB documents. It is designed to be unique and contains information derived from time along with other components. MongoDB often creates an _id field containing an ObjectId automatically."
  },

  {
    id: "fs-59",
    question: "What is the difference between SQL and MongoDB?",
    answer:
      "Relational databases organize structured data into tables with predefined relationships and commonly use SQL. MongoDB stores flexible BSON documents in collections and supports document-oriented modeling. MongoDB can be useful when data structures evolve or naturally map to documents, while relational databases are often preferred for strong relational modeling and complex joins."
  },

  {
    id: "fs-60",
    question: "What is embedding vs referencing in MongoDB?",
    answer:
      "Embedding stores related data inside the same document and is useful when the related data is usually accessed together. Referencing stores related documents separately and connects them using identifiers. The choice depends on access patterns, document size, update frequency, and relationship structure."
  },

  {
    id: "fs-61",
    question: "What is an index in MongoDB?",
    answer:
      "An index is a data structure that allows MongoDB to locate documents more efficiently for supported queries. Indexes can improve read performance but require additional storage and can increase the cost of writes because indexes must be maintained."
  },

  {
    id: "fs-62",
    question: "What is the MongoDB aggregation pipeline?",
    answer:
      "The aggregation pipeline processes documents through a sequence of stages. Common stages include $match for filtering, $group for grouping, $project for reshaping fields, $sort for ordering, $lookup for combining data, and $unwind for expanding arrays."
  },

  {
    id: "fs-63",
    question: "What is the difference between find() and aggregate() in MongoDB?",
    answer:
      "find() is primarily used to query and retrieve documents. aggregate() provides a pipeline of stages for filtering, grouping, transforming, sorting, joining, and performing more complex data processing."
  },

  {
    id: "fs-64",
    question: "Does MongoDB support transactions?",
    answer:
      "Yes. MongoDB supports transactions, including multi-document transactions in replica-set and sharded-cluster configurations. Transactions provide atomicity across multiple operations when used appropriately."
  },

  // =========================
  // REACT
  // =========================

  {
    id: "fs-65",
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using reusable components. It uses a declarative programming model where developers describe what the UI should look like for a given state."
  },

  {
    id: "fs-66",
    question: "What is a React component?",
    answer:
      "A React component is a reusable unit of UI and logic. Modern React applications commonly use function components. Components can receive data through props and maintain or consume state."
  },

  {
    id: "fs-67",
    question: "What are props in React?",
    answer:
      "Props are inputs passed from a parent component to a child component. They are read-only from the receiving component's perspective and are commonly used to make components reusable and configurable."
  },

  {
    id: "fs-68",
    question: "What is state in React?",
    answer:
      "State represents data that can change over time and affect what a component renders. Updating state through the appropriate React mechanism causes React to schedule a re-render so the UI can reflect the new state."
  },

  {
    id: "fs-69",
    question: "What is the difference between props and state?",
    answer:
      "Props are values provided to a component by its parent, while state is data managed by the component or its state-management mechanism. Props are treated as read-only inputs, whereas state can change over time."
  },

  {
    id: "fs-70",
    question: "What is useState?",
    answer:
      "useState is a React Hook that allows function components to maintain state. It returns the current state value and a setter function. Example: const [count, setCount] = useState(0);"
  },

  {
    id: "fs-71",
    question: "What is useEffect?",
    answer:
      "useEffect is a React Hook used to synchronize a component with external systems or perform side effects such as subscriptions, timers, or data fetching. Its dependency array controls when the effect is re-executed."
  },

  {
    id: "fs-72",
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a conceptual representation of the UI maintained by React. When state or props change, React determines what needs to change and updates the actual DOM efficiently rather than requiring developers to manually manipulate every affected element."
  },

  {
    id: "fs-73",
    question: "What is reconciliation in React?",
    answer:
      "Reconciliation is the process React uses to determine how the rendered UI should change when component state or props change. React compares the new element tree with the previous one and applies the necessary updates."
  },

  {
    id: "fs-74",
    question: "Why are keys important when rendering lists in React?",
    answer:
      "Keys help React identify which list items correspond to which elements between renders. Stable, unique keys allow React to preserve the correct component identity and efficiently update lists. Array indexes can be problematic as keys when list items can be reordered, inserted, or deleted."
  },

  {
    id: "fs-75",
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering means rendering different UI depending on application state or props. JavaScript constructs such as if statements, ternary expressions, and logical && are commonly used."
  },

  {
    id: "fs-76",
    question: "What is lifting state up in React?",
    answer:
      "Lifting state up means moving shared state to the closest common parent of components that need it. The parent owns the state and passes the necessary data and callbacks to its children through props."
  },

  {
    id: "fs-77",
    question: "What is the Context API?",
    answer:
      "React Context allows values to be made available to components deeper in the component tree without explicitly passing props through every intermediate component. It is useful for values such as themes, localization, or certain shared application state."
  },

  {
    id: "fs-78",
    question: "What is prop drilling?",
    answer:
      "Prop drilling occurs when data is passed through multiple intermediate components that do not themselves need the data, simply so a deeply nested component can receive it. Context or state-management solutions can sometimes reduce unnecessary prop drilling."
  },

  {
    id: "fs-79",
    question: "What are controlled and uncontrolled components?",
    answer:
      "A controlled form element has its value managed through React state and updated through event handlers. An uncontrolled element stores its current value in the DOM and can be accessed using a ref. Controlled components provide more direct React-based control over form state."
  },

  {
    id: "fs-80",
    question: "What are React Hooks and what rules do they follow?",
    answer:
      "Hooks are functions that let function components use React features such as state and effects. Hooks should generally be called only at the top level of React function components or custom Hooks, not inside loops, conditions, or nested ordinary functions."
  },

  {
    id: "fs-81",
    question: "What is useMemo?",
    answer:
      "useMemo memoizes the result of a calculation so React can reuse the cached value when its dependencies have not changed. It should be used when memoization provides a real performance benefit rather than automatically wrapping every calculation."
  },

  {
    id: "fs-82",
    question: "What is useCallback?",
    answer:
      "useCallback memoizes a function reference between renders until its dependencies change. It can be useful when passing callbacks to memoized child components or when a stable function reference is required."
  },

  {
    id: "fs-83",
    question: "What is React.memo?",
    answer:
      "React.memo is a performance optimization that can skip re-rendering a function component when its props have not changed according to the comparison being used. It is most useful when a component renders frequently and avoiding its render provides measurable benefit."
  },

  {
    id: "fs-84",
    question: "What is the difference between client-side and server-side rendering?",
    answer:
      "With client-side rendering, the browser receives JavaScript and builds much of the UI on the client. With server-side rendering, the server generates HTML for the requested UI and sends it to the browser, after which JavaScript can hydrate and make it interactive. Each approach has different performance, SEO, and architectural trade-offs."
  }
],
  },
  tests: {
    OS: [
      { id: "os-q1", question: "Which OS component manages memory allocation?", options: ["Kernel", "Compiler", "Debugger", "Shell"], answer: "Kernel" },
      { id: "os-q2", question: "Which scheduling policy is preemptive?", options: ["Round Robin", "FIFO", "Stack", "Queue"], answer: "Round Robin" },
      { id: "os-q3", question: "What is the purpose of a mutex?", options: ["To share memory", "To protect critical sections", "To schedule jobs", "To monitor CPU"], answer: "To protect critical sections" },
      { id: "os-q4", question: "What is paging?", options: ["A network protocol", "Memory management by fixed-size blocks", "A disk scheduling method", "A file type"], answer: "Memory management by fixed-size blocks" },
      { id: "os-q5", question: "Which state is a process in when it is waiting for an I/O event?", options: ["Ready", "Blocked", "Running", "Terminated"], answer: "Blocked" },
      { id: "os-q6", question: "Which is not a process state?", options: ["Ready", "Running", "Pending", "Zombie"], answer: "Pending" },
      { id: "os-q7", question: "What is the role of the scheduler?", options: ["To compile code", "To select processes for execution", "To encrypt files", "To route packets"], answer: "To select processes for execution" },
      { id: "os-q8", question: "What is a semaphore used for?", options: ["Data compression", "Synchronization", "User interface rendering", "Queue sorting"], answer: "Synchronization" },
      { id: "os-q9", question: "Which memory type is shared between threads in the same process?", options: ["Heap", "Stack", "Registers", "Instruction cache"], answer: "Heap" },
      { id: "os-q10", question: "What does context switching do?", options: ["Changes browser tabs", "Stores and restores CPU state", "Encrypts data", "Routes network packets"], answer: "Stores and restores CPU state" },
      { id: "os-q11", question: "Which is one of the four necessary conditions for deadlock?", options: ["Mutual Exclusion", "Preemption", "Time Sharing", "Multitasking"], answer: "Mutual Exclusion" },
      { id: "os-q12", question: "Thrashing is primarily caused by what?", options: ["Too much CPU", "Excessive page swapping due to low memory", "Network congestion", "Disk fragmentation"], answer: "Excessive page swapping due to low memory" },
      { id: "os-q13", question: "Which page replacement algorithm replaces the page unused for the longest time?", options: ["FIFO", "LRU", "Optimal", "Random"], answer: "LRU" },
      { id: "os-q14", question: "What does virtual memory primarily allow?", options: ["Running programs larger than physical RAM", "Faster CPU clock", "Better GPU rendering", "Larger screen resolution"], answer: "Running programs larger than physical RAM" },
      { id: "os-q15", question: "Which scheduling algorithm is designed for predictable real-time systems?", options: ["Round Robin", "Priority Scheduling", "FCFS", "Rate Monotonic Scheduling"], answer: "Rate Monotonic Scheduling" },
    ],
    Networks: [
      { id: "net-q1", question: "Which layer is responsible for routing?", options: ["Application", "Transport", "Network", "Data Link"], answer: "Network" },
      { id: "net-q2", question: "What does TCP guarantee?", options: ["Fastest possible transfer", "Ordered, reliable delivery", "Unencrypted transfer", "Broadcast only"], answer: "Ordered, reliable delivery" },
      { id: "net-q3", question: "Which protocol resolves domain names?", options: ["HTTP", "DNS", "SMTP", "ICMP"], answer: "DNS" },
      { id: "net-q4", question: "Which port is used by HTTPS?", options: ["80", "21", "443", "53"], answer: "443" },
      { id: "net-q5", question: "What is a MAC address?", options: ["A software version", "A physical hardware address", "A DNS record", "A firewall rule"], answer: "A physical hardware address" },
      { id: "net-q6", question: "What is the role of a router?", options: ["To display UI", "To forward packets between networks", "To compress files", "To manage OS tasks"], answer: "To forward packets between networks" },
      { id: "net-q7", question: "What does UDP prioritize?", options: ["Reliability", "Speed and low latency", "Encryption", "File persistence"], answer: "Speed and low latency" },
      { id: "net-q8", question: "Which device operates at layer 2?", options: ["Router", "Switch", "Application server", "Kernel"], answer: "Switch" },
      { id: "net-q9", question: "What is a socket?", options: ["A network endpoint", "A database table", "A screen buffer", "A filesystem path"], answer: "A network endpoint" },
      { id: "net-q10", question: "Which protocol is used for email retrieval?", options: ["HTTP", "POP3/IMAP", "SSH", "ARP"], answer: "POP3/IMAP" },
      { id: "net-q11", question: "What happens in a TCP three-way handshake?", options: ["SYN, SYN-ACK, ACK exchange", "A single SYN packet", "A UDP datagram exchange", "A DNS lookup"], answer: "SYN, SYN-ACK, ACK exchange" },
      { id: "net-q12", question: "Which protocol is connectionless?", options: ["TCP", "UDP", "FTP", "SSH"], answer: "UDP" },
      { id: "net-q13", question: "What does NAT primarily do?", options: ["Translates private IPs to a public IP", "Encrypts traffic", "Resolves domain names", "Balances load"], answer: "Translates private IPs to a public IP" },
      { id: "net-q14", question: "How many layers does the OSI model have?", options: ["4", "5", "7", "9"], answer: "7" },
      { id: "net-q15", question: "What is the main purpose of a CDN?", options: ["Reduce latency by serving content from nearby servers", "Encrypt database queries", "Manage DNS records only", "Compile JavaScript"], answer: "Reduce latency by serving content from nearby servers" },
    ],
    Fullstack: [
      { id: "fs-q1", question: "Which language typically runs in the browser?", options: ["Java", "C++", "JavaScript", "SQL"], answer: "JavaScript" },
      { id: "fs-q2", question: "What is JSX?", options: ["A database query", "XML-like syntax for UI", "A CSS preprocessor", "A server protocol"], answer: "XML-like syntax for UI" },
      { id: "fs-q3", question: "What does the backend do?", options: ["Only renders HTML", "Processes requests and business logic", "Only styles pages", "Only fetches images"], answer: "Processes requests and business logic" },
      { id: "fs-q4", question: "What is an API?", options: ["Application Programming Interface", "Addressable Port Index", "Automated Print Implementation", "Array Processing Input"], answer: "Application Programming Interface" },
      { id: "fs-q5", question: "What is state in frontend apps?", options: ["A server-side log", "Data that affects UI", "A CSS class", "A network packet"], answer: "Data that affects UI" },
      { id: "fs-q6", question: "Which HTTP method is used to create data?", options: ["GET", "POST", "DELETE", "PATCH"], answer: "POST" },
      { id: "fs-q7", question: "What is SSR?", options: ["Server-side rendering", "Structured source routing", "Simple script reduction", "System status report"], answer: "Server-side rendering" },
      { id: "fs-q8", question: "What is middleware in Express?", options: ["OS hardware layer", "Function between request and response", "Database index", "Client-side CSS"], answer: "Function between request and response" },
      { id: "fs-q9", question: "What is hydration?", options: ["Loading CSS", "Attaching client behavior to server-rendered HTML", "Database backup", "Turning off caching"], answer: "Attaching client behavior to server-rendered HTML" },
      { id: "fs-q10", question: "What is a REST endpoint?", options: ["A UI component", "A URL that exposes API functionality", "A CSS file", "A DNS record"], answer: "A URL that exposes API functionality" },
      { id: "fs-q11", question: "What is the main difference between authentication and authorization?", options: ["Authentication verifies identity, authorization grants permissions", "They are the same thing", "Authorization always happens before authentication", "Authentication is only for APIs"], answer: "Authentication verifies identity, authorization grants permissions" },
      { id: "fs-q12", question: "What is a JWT commonly used for?", options: ["Stateless authentication", "Styling pages", "Database indexing", "DNS resolution"], answer: "Stateless authentication" },
      { id: "fs-q13", question: "Which type of database is best suited for flexible, schema-less data?", options: ["SQL", "NoSQL", "Both equally", "Neither"], answer: "NoSQL" },
      { id: "fs-q14", question: "What is a key benefit of microservices over a monolith?", options: ["Independent deployability of services", "Always faster runtime", "No network overhead", "Simpler debugging"], answer: "Independent deployability of services" },
      { id: "fs-q15", question: "What does a WebSocket enable that plain HTTP does not?", options: ["Persistent two-way real-time communication", "Faster DNS lookup", "Automatic database backup", "Static file compression"], answer: "Persistent two-way real-time communication" },
    ],
    ML: [
      { id: "ml-q1", question: "What is training data?", options: ["A test server", "Data used to teach a model", "A memory cache", "A user interface"], answer: "Data used to teach a model" },
      { id: "ml-q2", question: "What is a label?", options: ["A model output path", "The target value for supervised learning", "A CSS property", "An API route"], answer: "The target value for supervised learning" },
      { id: "ml-q3", question: "What does precision measure?", options: ["False negatives", "Correct positive predictions among all predicted positives", "Total training time", "Dataset size"], answer: "Correct positive predictions among all predicted positives" },
      { id: "ml-q4", question: "What is regression?", options: ["Predicting continuous values", "Sorting strings", "Logging requests", "Routing traffic"], answer: "Predicting continuous values" },
      { id: "ml-q5", question: "What is a decision tree?", options: ["A type of graph database", "A model that splits data by conditions", "A network protocol", "A backend framework"], answer: "A model that splits data by conditions" },
      { id: "ml-q6", question: "What does recall measure?", options: ["True positives over actual positives", "Model speed", "Feature count", "API latency"], answer: "True positives over actual positives" },
      { id: "ml-q7", question: "What is underfitting?", options: ["Model too simple to capture patterns", "Model too complex for data", "Network failure", "Memory leak"], answer: "Model too simple to capture patterns" },
      { id: "ml-q8", question: "What is gradient descent?", options: ["A sorting method", "An optimization algorithm", "A database index", "A security protocol"], answer: "An optimization algorithm" },
      { id: "ml-q9", question: "What is a validation set?", options: ["An API endpoint", "A separate dataset for tuning model choices", "A cloud instance", "A file system"], answer: "A separate dataset for tuning model choices" },
      { id: "ml-q10", question: "What is feature engineering?", options: ["Creating useful transformed inputs", "Writing HTML", "Managing servers", "Optimizing SQL"], answer: "Creating useful transformed inputs" },
      { id: "ml-q11", question: "What does the bias-variance tradeoff describe?", options: ["Balance between underfitting and overfitting", "CPU vs GPU tradeoff", "Memory vs disk tradeoff", "Accuracy vs speed only"], answer: "Balance between underfitting and overfitting" },
      { id: "ml-q12", question: "Which technique helps reduce overfitting?", options: ["Regularization", "Increasing model complexity", "Removing all validation data", "Reducing training data"], answer: "Regularization" },
      { id: "ml-q13", question: "What does bagging primarily reduce?", options: ["Variance", "Bias", "Latency", "Storage"], answer: "Variance" },
      { id: "ml-q14", question: "What does boosting primarily reduce?", options: ["Bias", "Variance only", "Network latency", "Disk usage"], answer: "Bias" },
      { id: "ml-q15", question: "What is the main purpose of PCA?", options: ["Reduce dimensionality while preserving variance", "Increase dataset size", "Encrypt data", "Balance classes"], answer: "Reduce dimensionality while preserving variance" },
    ],
    AI: [
      { id: "ai-q1", question: "What is generative AI?", options: ["A database system", "AI that creates text, images, or code", "A CPU scheduler", "A markdown tool"], answer: "AI that creates text, images, or code" },
      { id: "ai-q2", question: "What does an LLM do?", options: ["Stores files", "Generates language based on patterns", "Manages traffic", "Compiles C++"], answer: "Generates language based on patterns" },
      { id: "ai-q3", question: "What is a token?", options: ["A piece of data used in model processing", "An API key", "A database row", "A CPU core"], answer: "A piece of data used in model processing" },
      { id: "ai-q4", question: "What is retrieval-augmented generation?", options: ["A method to use external knowledge in responses", "A method to index files", "A UI animation", "A database backup"], answer: "A method to use external knowledge in responses" },
      { id: "ai-q5", question: "What is fine-tuning?", options: ["Adjusting a model further on specific data", "Increasing network speed", "Editing CSS", "Removing binaries"], answer: "Adjusting a model further on specific data" },
      { id: "ai-q6", question: "What does temperature control?", options: ["The model's randomness", "CPU clock speed", "Memory access", "API timeout"], answer: "The model's randomness" },
      { id: "ai-q7", question: "What is a prompt?", options: ["An input instruction to the model", "A database table", "A queue item", "A file extension"], answer: "An input instruction to the model" },
      { id: "ai-q8", question: "What are embeddings?", options: ["Numeric vector representations of meaning", "Database schema definitions", "Bitwise operators", "HTTP headers"], answer: "Numeric vector representations of meaning" },
      { id: "ai-q9", question: "What is the purpose of zero-shot prompting?", options: ["To avoid training data", "To ask the model to perform a task without examples", "To disable caching", "To compress logs"], answer: "To ask the model to perform a task without examples" },
      { id: "ai-q10", question: "What is model alignment?", options: ["Improving the model to follow human intent and safety constraints", "Linking two servers", "Optimizing SQL queries", "Designing page layout"], answer: "Improving the model to follow human intent and safety constraints" },
      { id: "ai-q11", question: "What is the role of backpropagation?", options: ["Updating weights by propagating error gradients backward", "Forward-only data flow", "Compressing model size", "Encrypting model weights"], answer: "Updating weights by propagating error gradients backward" },
      { id: "ai-q12", question: "Why are activation functions needed in neural networks?", options: ["To introduce non-linearity", "To speed up disk I/O", "To reduce dataset size", "To sort training data"], answer: "To introduce non-linearity" },
      { id: "ai-q13", question: "What type of data are CNNs best suited for?", options: ["Spatial data like images", "Sequential text only", "Tabular SQL data", "Network packets"], answer: "Spatial data like images" },
      { id: "ai-q14", question: "What problem does the attention mechanism help solve?", options: ["Capturing long-range dependencies in sequences", "Reducing GPU memory to zero", "Replacing all databases", "Compiling code faster"], answer: "Capturing long-range dependencies in sequences" },
      { id: "ai-q15", question: "What does RAG combine with a language model?", options: ["External document retrieval", "Only more training data", "A faster CPU", "A larger screen"], answer: "External document retrieval" },
    ],
    "System Design": [
      { id: "sd-q1", question: "What is throughput?", options: ["Amount of work processed per unit time", "Storage capacity", "CPU frequency", "Packet size"], answer: "Amount of work processed per unit time" },
      { id: "sd-q2", question: "What is latency?", options: ["Time delay before a response", "Disk usage", "Algorithm depth", "Cache size"], answer: "Time delay before a response" },
      { id: "sd-q3", question: "What is horizontal scaling?", options: ["Adding more machines", "Upgrading a single machine", "Removing cache", "Using one thread"], answer: "Adding more machines" },
      { id: "sd-q4", question: "What is replication?", options: ["Copying data across systems for redundancy", "Compressing files", "Clearing logs", "Resetting routes"], answer: "Copying data across systems for redundancy" },
      { id: "sd-q5", question: "Why use a cache?", options: ["To reduce repeated expensive work", "To make code faster to compile", "To minimize RAM", "To replace the database"], answer: "To reduce repeated expensive work" },
      { id: "sd-q6", question: "What is a database index useful for?", options: ["Making backups", "Faster reads on query columns", "Rendering UI", "Networking"], answer: "Faster reads on query columns" },
      { id: "sd-q7", question: "What is partitioning?", options: ["Splitting data into smaller pieces", "Combining code files", "Optimizing CSS", "Compiling JS"], answer: "Splitting data into smaller pieces" },
      { id: "sd-q8", question: "What is a rate limiter?", options: ["A tool that controls request volume", "A UI animation", "A data type", "A compiler pass"], answer: "A tool that controls request volume" },
      { id: "sd-q9", question: "What is fault tolerance?", options: ["Ability to continue despite failures", "Database indexing", "UI responsiveness", "Service discovery"], answer: "Ability to continue despite failures" },
      { id: "sd-q10", question: "Why use asynchronous processing?", options: ["To block all requests", "To decouple tasks and improve responsiveness", "To avoid using APIs", "To change screen layout"], answer: "To decouple tasks and improve responsiveness" },
      { id: "sd-q11", question: "What does the CAP theorem state a distributed system must trade off?", options: ["Consistency, Availability, and Partition tolerance", "Speed, Cost, and Security", "CPU, Memory, and Disk", "Users, Servers, and Databases"], answer: "Consistency, Availability, and Partition tolerance" },
      { id: "sd-q12", question: "What is the main purpose of database sharding?", options: ["Distributing data across multiple servers for scalability", "Encrypting data at rest", "Compiling queries faster", "Formatting table columns"], answer: "Distributing data across multiple servers for scalability" },
      { id: "sd-q13", question: "What does an API Gateway typically handle?", options: ["Routing, auth, and rate limiting for backend services", "Only database storage", "CSS rendering", "Local file caching"], answer: "Routing, auth, and rate limiting for backend services" },
      { id: "sd-q14", question: "Why is idempotency important in API design?", options: ["It allows safe retries of the same request", "It increases server cost", "It removes the need for authentication", "It always speeds up networks"], answer: "It allows safe retries of the same request" },
      { id: "sd-q15", question: "What is the key benefit of consistent hashing?", options: ["Minimizes data redistribution when nodes change", "Guarantees zero latency", "Removes need for replication", "Increases storage cost"], answer: "Minimizes data redistribution when nodes change" },
    ],
    "Data Structures and Algorithms": [
      { id: "dsa-q1", question: "What does O(1) mean?", options: ["Constant time", "Linear time", "Exponential time", "Quadratic time"], answer: "Constant time" },
      { id: "dsa-q2", question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], answer: "Stack" },
      { id: "dsa-q3", question: "Which traversal starts at root and visits left-right?", options: ["Inorder", "Preorder", "Postorder", "Level-order"], answer: "Preorder" },
      { id: "dsa-q4", question: "What is a hash map used for?", options: ["Storing key-value pairs", "Byte-level encryption", "Queue scheduling", "Disk reading"], answer: "Storing key-value pairs" },
      { id: "dsa-q5", question: "Which sorting algorithm has best average complexity?", options: ["Quick sort", "Merge sort", "Selection sort", "Bubble sort"], answer: "Quick sort" },
      { id: "dsa-q6", question: "What is a graph?", options: ["A set of nodes and edges", "A sorted array", "A queue", "A stack"], answer: "A set of nodes and edges" },
      { id: "dsa-q7", question: "What is recursion?", options: ["Calling a function from itself", "A loop structure", "A hash function", "A database query"], answer: "Calling a function from itself" },
      { id: "dsa-q8", question: "What is the time complexity of binary search?", options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"], answer: "O(log n)" },
      { id: "dsa-q9", question: "Which DS is best for BFS?", options: ["Stack", "Queue", "Tree", "Trie"], answer: "Queue" },
      { id: "dsa-q10", question: "What is a linked list?", options: ["A sequence of nodes connected by pointers", "A static array", "A hash table", "A database row"], answer: "A sequence of nodes connected by pointers" },
      { id: "dsa-q11", question: "Which traversal explores a graph level by level?", options: ["BFS", "DFS", "Inorder", "Postorder"], answer: "BFS" },
      { id: "dsa-q12", question: "Which structure typically implements DFS using recursion or an explicit stack?", options: ["Stack", "Queue", "Heap", "Hash map"], answer: "Stack" },
      { id: "dsa-q13", question: "What is the average time complexity of hash table lookup?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
      { id: "dsa-q14", question: "Dynamic programming is most useful when a problem has which property?", options: ["Overlapping subproblems and optimal substructure", "No repeated subproblems", "Only greedy choices", "Purely random inputs"], answer: "Overlapping subproblems and optimal substructure" },
      { id: "dsa-q15", question: "What is the worst-case time complexity of search in an unbalanced BST?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], answer: "O(n)" },
    ],
    OOPs: [
      { id: "oops-q1", question: "What does OOP stand for?", options: ["Object-Oriented Programming", "Output-Oriented Procedure", "Open Object Platform", "Optimized Operational Pattern"], answer: "Object-Oriented Programming" },
      { id: "oops-q2", question: "What is a class?", options: ["A blueprint for objects", "A database table", "An algorithm", "A network packet"], answer: "A blueprint for objects" },
      { id: "oops-q3", question: "What is an object?", options: ["An instance of a class", "A function call", "A memory pointer", "A JSON file"], answer: "An instance of a class" },
      { id: "oops-q4", question: "What is inheritance used for?", options: ["Code reuse", "Network routing", "SQL indexing", "UI styling"], answer: "Code reuse" },
      { id: "oops-q5", question: "What is method overriding?", options: ["Changing the definition in a subclass", "Adding a class attribute", "Removing a method", "Declaring a variable"], answer: "Changing the definition in a subclass" },
      { id: "oops-q6", question: "What is abstraction?", options: ["Hiding internal complexity", "Sharing all implementation", "Adding more fields", "Making things public"], answer: "Hiding internal complexity" },
      { id: "oops-q7", question: "What is encapsulation?", options: ["Binding data and methods together", "Flattening classes", "Writing plain functions", "Optimizing loops"], answer: "Binding data and methods together" },
      { id: "oops-q8", question: "Which keyword is used for class inheritance in Java?", options: ["implements", "extends", "inherits", "uses"], answer: "extends" },
      { id: "oops-q9", question: "What is polymorphism?", options: ["Many forms of the same interface", "Memory duplication", "Only private methods", "Database normalization"], answer: "Many forms of the same interface" },
      { id: "oops-q10", question: "What is a constructor?", options: ["A method to initialize an object", "A data structure", "A CSS rule", "A query"], answer: "A method to initialize an object" },
      { id: "oops-q11", question: "What is the key difference between overloading and overriding?", options: ["Overloading is compile-time, overriding is runtime", "Both happen at runtime", "Both happen at compile-time", "Overriding requires different parameter types"], answer: "Overloading is compile-time, overriding is runtime" },
      { id: "oops-q12", question: "Which OOP concept models a 'has-a' relationship?", options: ["Composition", "Inheritance", "Polymorphism", "Abstraction"], answer: "Composition" },
      { id: "oops-q13", question: "What does an interface traditionally NOT contain, in classic OOP languages?", options: ["Implemented method bodies", "Method signatures", "A name", "Public methods"], answer: "Implemented method bodies" },
      { id: "oops-q14", question: "Which SOLID principle states a class should have only one reason to change?", options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"], answer: "Single Responsibility Principle" },
      { id: "oops-q15", question: "Which access modifier restricts a member to only within its own class?", options: ["private", "public", "protected", "static"], answer: "private" },
    ],
    DBMS: [
      { id: "dbms-q1", question: "What is SQL?", options: ["Structured Query Language", "Simple Query Logic", "System Query Layer", "Source Query List"], answer: "Structured Query Language" },
      { id: "dbms-q2", question: "What is a transaction?", options: ["A unit of work committed atomically", "A file system object", "A network packet", "A UI component"], answer: "A unit of work committed atomically" },
      { id: "dbms-q3", question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Analysis, Concurrency, Indexing, Design", "Archive, Cache, ID, Data"], answer: "Atomicity, Consistency, Isolation, Durability" },
      { id: "dbms-q4", question: "What is a join?", options: ["A way to combine data from multiple tables", "A database backup", "A file path", "A loop"], answer: "A way to combine data from multiple tables" },
      { id: "dbms-q5", question: "Which join returns common rows only?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], answer: "INNER JOIN" },
      { id: "dbms-q6", question: "What is a view?", options: ["A virtual table based on a query", "A database index", "A server process", "A UI component"], answer: "A virtual table based on a query" },
      { id: "dbms-q7", question: "What is the purpose of a foreign key?", options: ["To define relationships between tables", "To create indexes", "To compress data", "To route traffic"], answer: "To define relationships between tables" },
      { id: "dbms-q8", question: "What is normalization?", options: ["Removing redundancy and improving structure", "Upgrading hardware", "Increasing query delay", "Adding comments"], answer: "Removing redundancy and improving structure" },
      { id: "dbms-q9", question: "What is a deadlock in DBMS?", options: ["When transactions wait on each other", "When a table is dropped", "When a query is cached", "When an index is missing"], answer: "When transactions wait on each other" },
      { id: "dbms-q10", question: "What is the use of indexing?", options: ["To speed up data retrieval", "To slow down writes", "To delete records", "To format tables"], answer: "To speed up data retrieval" },
      { id: "dbms-q11", question: "What does the 'A' in ACID stand for?", options: ["Atomicity", "Availability", "Aggregation", "Access"], answer: "Atomicity" },
      { id: "dbms-q12", question: "Which join returns all rows from the left table, with NULLs for non-matches?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"], answer: "LEFT JOIN" },
      { id: "dbms-q13", question: "How many clustered indexes can a table have?", options: ["One", "Unlimited", "Zero always", "Exactly two"], answer: "One" },
      { id: "dbms-q14", question: "What is denormalization primarily used to improve?", options: ["Read performance by reducing joins", "Write performance only", "Data redundancy elimination", "Query language syntax"], answer: "Read performance by reducing joins" },
      { id: "dbms-q15", question: "Which SQL command removes an entire table structure from the database?", options: ["DROP", "DELETE", "TRUNCATE", "UPDATE"], answer: "DROP" },
    ],
  },
};

// NOTE: previously we auto-generated filler flashcards to reach 50 items per
// category. That created many generic "Explain <topic> concept #N" entries.
// Removing the automatic filler keeps the flashcards curated and avoids
// repeated or placeholder items; add new real questions below as needed.
