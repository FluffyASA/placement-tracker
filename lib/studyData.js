export const studyModules = [

  // ============================================================
  // OPERATING SYSTEMS
  // ============================================================

  {
    id: "OS",
    title: "Operating Systems",
    sections: [

      {
        id: "os-1",
        title: "Introduction to Operating Systems",
        resource: "https://www.geeksforgeeks.org/operating-systems/operating-systems/",
        article:
          "Learn what an Operating System is, why it is required, and how it manages hardware, processes, memory, files and I/O devices."
      },

      {
        id: "os-2",
        title: "Types of Operating Systems",
        resource: "https://www.geeksforgeeks.org/operating-systems/types-of-operating-systems/",
        article:
          "Understand batch, multiprogramming, multitasking, time-sharing, distributed, network and real-time operating systems."
      },

      {
        id: "os-3",
        title: "Processes and Process States",
        resource: "https://www.geeksforgeeks.org/operating-systems/processes-in-operating-system/",
        article:
          "Learn what a process is, process states, Process Control Blocks, context switching and how processes are managed."
      },

      {
        id: "os-4",
        title: "Threads and Multithreading",
        resource: "https://www.geeksforgeeks.org/operating-systems/thread-in-operating-system/",
        article:
          "Understand threads, user-level vs kernel-level threads, multithreading and why threads are lighter than processes."
      },

      {
        id: "os-5",
        title: "Process vs Thread",
        resource: "https://www.geeksforgeeks.org/operating-systems/difference-between-process-and-thread/",
        article:
          "Compare processes and threads in terms of memory, isolation, creation cost, communication and context switching."
      },

      {
        id: "os-6",
        title: "CPU Scheduling",
        resource: "https://www.geeksforgeeks.org/operating-systems/cpu-scheduling-in-operating-systems/",
        article:
          "Study FCFS, SJF, SRTF, Round Robin and Priority Scheduling along with waiting time, turnaround time and response time."
      },

      {
        id: "os-7",
        title: "Process Synchronization",
        resource: "https://www.geeksforgeeks.org/operating-systems/process-synchronization/",
        article:
          "Learn critical sections, race conditions, mutual exclusion, synchronization and common synchronization problems."
      },

      {
        id: "os-8",
        title: "Mutex and Semaphores",
        resource: "https://www.geeksforgeeks.org/operating-systems/mutex-vs-semaphore/",
        article:
          "Understand mutexes and semaphores and when each is used to control access to shared resources."
      },

      {
        id: "os-9",
        title: "Deadlocks",
        resource: "https://takeuforward.org/operating-system/most-asked-operating-system-interview-questions",
        article:
          "Learn the four necessary conditions for deadlock, prevention, avoidance, detection and recovery."
      },

      {
        id: "os-10",
        title: "Banker's Algorithm",
        resource: "https://www.geeksforgeeks.org/operating-systems/bankers-algorithm-in-operating-system-2/",
        article:
          "Understand how the Banker's Algorithm checks whether allocating resources can leave the system in a safe state."
      },

      {
        id: "os-11",
        title: "Memory Management",
        resource: "https://www.geeksforgeeks.org/operating-systems/memory-management-in-operating-system/",
        article:
          "Study memory allocation, logical and physical addresses, fragmentation and memory management techniques."
      },

      {
        id: "os-12",
        title: "Paging",
        resource: "https://www.geeksforgeeks.org/operating-systems/paging-in-operating-system/",
        article:
          "Learn how paging divides memory into pages and frames and how page tables translate logical addresses."
      },

      {
        id: "os-13",
        title: "Segmentation",
        resource: "https://www.geeksforgeeks.org/operating-systems/segmentation-in-operating-system/",
        article:
          "Understand segmentation and how memory can be divided according to logical program segments."
      },

      {
        id: "os-14",
        title: "Virtual Memory",
        resource: "https://www.geeksforgeeks.org/operating-systems/virtual-memory-in-operating-system/",
        article:
          "Learn virtual memory, demand paging, page faults and how programs can use more logical memory than physical RAM."
      },

      {
        id: "os-15",
        title: "Page Replacement Algorithms",
        resource: "https://www.geeksforgeeks.org/operating-systems/page-replacement-algorithms-in-operating-systems/",
        article:
          "Practice FIFO, LRU and Optimal page replacement and learn how to calculate page faults."
      },

      {
        id: "os-16",
        title: "TLB",
        resource: "https://www.geeksforgeeks.org/operating-systems/translation-lookaside-buffer-tlb/",
        article:
          "Understand the Translation Lookaside Buffer and how it speeds up virtual-to-physical address translation."
      },

      {
        id: "os-17",
        title: "File Systems",
        resource: "https://www.geeksforgeeks.org/operating-systems/file-systems-in-operating-system/",
        article:
          "Learn files, directories, file allocation, access methods and basic file-system organization."
      },

      {
        id: "os-18",
        title: "Disk Scheduling",
        resource: "https://www.geeksforgeeks.org/operating-systems/disk-scheduling-algorithms/",
        article:
          "Study FCFS, SSTF, SCAN, C-SCAN, LOOK and C-LOOK disk scheduling algorithms."
      }
    ]
  },


  // ============================================================
  // COMPUTER NETWORKS
  // ============================================================

  {
    id: "Networks",
    title: "Computer Networks",
    sections: [

      {
        id: "net-1",
        title: "Networking Fundamentals",
        resource: "https://www.geeksforgeeks.org/computer-networks/commonly-asked-computer-networks-interview-questions-set-1/",
        article:
          "Review network fundamentals, protocols, devices, packets, bandwidth, latency and the role of computer networks."
      },

      {
        id: "net-2",
        title: "OSI Model",
        resource: "https://www.geeksforgeeks.org/computer-networks/osi-model/",
        article:
          "Learn all seven OSI layers, their responsibilities and common protocols associated with each layer."
      },

      {
        id: "net-3",
        title: "TCP/IP Model",
        resource: "https://www.geeksforgeeks.org/computer-networks/tcp-ip-model/",
        article:
          "Understand the TCP/IP architecture and how its layers correspond to the OSI model."
      },

      {
        id: "net-4",
        title: "OSI vs TCP/IP",
        resource: "https://www.geeksforgeeks.org/computer-networks/difference-between-osi-and-tcp-ip-model/",
        article:
          "Compare the OSI and TCP/IP models, their layers, purposes and practical usage."
      },

      {
        id: "net-5",
        title: "IP Addressing",
        resource: "https://www.geeksforgeeks.org/computer-networks/ip-addressing-introduction-and-classful-addressing/",
        article:
          "Learn IPv4 addresses, network and host portions, address classes and basic IP addressing."
      },

      {
        id: "net-6",
        title: "Subnetting and CIDR",
        resource: "https://www.geeksforgeeks.org/computer-networks/subnetting-in-computer-networks/",
        article:
          "Practice subnet masks, CIDR notation, number of subnets, usable hosts and subnetting problems."
      },

      {
        id: "net-7",
        title: "MAC Address and ARP",
        resource: "https://www.geeksforgeeks.org/computer-networks/address-resolution-protocol-arp/",
        article:
          "Understand MAC addresses and how ARP maps IP addresses to MAC addresses on a local network."
      },

      {
        id: "net-8",
        title: "DHCP",
        resource: "https://www.geeksforgeeks.org/computer-networks/dynamic-host-configuration-protocol-dhcp/",
        article:
          "Learn how DHCP automatically provides devices with IP addresses, subnet masks, gateways and DNS information."
      },

      {
        id: "net-9",
        title: "TCP vs UDP",
        resource: "https://www.geeksforgeeks.org/computer-networks/differences-between-tcp-and-udp/",
        article:
          "Compare TCP and UDP based on reliability, ordering, connection setup, overhead and common use cases."
      },

      {
        id: "net-10",
        title: "TCP Three-Way Handshake",
        resource: "https://www.geeksforgeeks.org/computer-networks/tcp-3-way-handshake-process/",
        article:
          "Understand SYN, SYN-ACK and ACK and why TCP uses a three-way handshake to establish connections."
      },

      {
        id: "net-11",
        title: "TCP Flow Control",
        resource: "https://www.geeksforgeeks.org/computer-networks/tcp-flow-control/",
        article:
          "Learn how TCP prevents a fast sender from overwhelming a slow receiver using the receive window."
      },

      {
        id: "net-12",
        title: "TCP Congestion Control",
        resource: "https://www.geeksforgeeks.org/computer-networks/tcp-congestion-control/",
        article:
          "Study slow start, congestion avoidance, fast retransmit and fast recovery."
      },

      {
        id: "net-13",
        title: "DNS",
        resource: "https://www.geeksforgeeks.org/computer-networks/domain-name-system-dns-in-computer-network/",
        article:
          "Understand how domain names are translated into IP addresses and how DNS resolution works."
      },

      {
        id: "net-14",
        title: "HTTP and HTTPS",
        resource: "https://www.geeksforgeeks.org/computer-networks/http-vs-https/",
        article:
          "Learn HTTP requests, responses, methods and status codes and understand how HTTPS adds TLS security."
      },

      {
        id: "net-15",
        title: "Routing and Switching",
        resource: "https://www.geeksforgeeks.org/computer-networks/routing-switching-interview-questions-computer-networks/",
        article:
          "Understand how switches forward frames using MAC addresses and routers forward packets using IP addresses."
      },

      {
        id: "net-16",
        title: "Network Devices",
        resource: "https://www.geeksforgeeks.org/computer-networks/network-devices/",
        article:
          "Learn the differences between hubs, switches, routers, bridges, repeaters, gateways and access points."
      },

      {
        id: "net-17",
        title: "Sockets",
        resource: "https://www.geeksforgeeks.org/computer-networks/socket-programming-cc/",
        article:
          "Understand sockets as communication endpoints and how client-server communication works."
      }
    ]
  },


  // ============================================================
  // MACHINE LEARNING
  // ============================================================

  {
    id: "ML",
    title: "Machine Learning",
    sections: [

      {
        id: "ml-1",
        title: "Introduction to Machine Learning",
        resource: "https://www.geeksforgeeks.org/machine-learning/machine-learning/",
        article:
          "Understand what machine learning is, why it is used and how it differs from traditional rule-based programming."
      },

      {
        id: "ml-2",
        title: "AI vs ML vs Data Science",
        resource: "https://www.geeksforgeeks.org/machine-learning/machine-learning-interview-questions/",
        article:
          "Learn how Artificial Intelligence, Machine Learning and Data Science differ and overlap."
      },

      {
        id: "ml-3",
        title: "Supervised vs Unsupervised Learning",
        resource: "https://www.geeksforgeeks.org/machine-learning/10-basic-machine-learning-interview-questions/",
        article:
          "Understand labelled and unlabelled data and the difference between supervised and unsupervised learning."
      },

      {
        id: "ml-4",
        title: "Classification vs Regression",
        resource: "https://www.geeksforgeeks.org/machine-learning/difference-between-classification-and-regression/",
        article:
          "Learn when a model should predict a category versus a continuous numerical value."
      },

      {
        id: "ml-5",
        title: "Training, Validation and Test Sets",
        resource: "https://www.geeksforgeeks.org/machine-learning/train-and-test-set-in-machine-learning/",
        article:
          "Understand dataset splitting and why validation and test data must remain separate from training."
      },

      {
        id: "ml-6",
        title: "Overfitting and Underfitting",
        resource: "https://www.geeksforgeeks.org/machine-learning/underfitting-and-overfitting-in-machine-learning/",
        article:
          "Learn why models can be too simple or too complex and how regularization and better data can help."
      },

      {
        id: "ml-7",
        title: "Bias-Variance Tradeoff",
        resource: "https://www.geeksforgeeks.org/machine-learning/ml-underfitting-and-overfitting/",
        article:
          "Understand bias, variance and the tradeoff involved when selecting model complexity."
      },

      {
        id: "ml-8",
        title: "Feature Engineering",
        resource: "https://www.geeksforgeeks.org/machine-learning/feature-engineering/",
        article:
          "Study feature creation, transformation, encoding, missing values and techniques for improving model inputs."
      },

      {
        id: "ml-9",
        title: "Feature Scaling",
        resource: "https://www.geeksforgeeks.org/machine-learning/standardscaler-minmaxscaler-and-robustscaler-techniques/",
        article:
          "Understand normalization and standardization and when feature scaling matters."
      },

      {
        id: "ml-10",
        title: "Linear Regression",
        resource: "https://www.geeksforgeeks.org/machine-learning/linear-regression-python-implementation/",
        article:
          "Learn the intuition, equation, cost function and basic implementation of linear regression."
      },

      {
        id: "ml-11",
        title: "Logistic Regression",
        resource: "https://www.geeksforgeeks.org/machine-learning/understanding-logistic-regression/",
        article:
          "Understand logistic regression, sigmoid activation, probability prediction and classification."
      },

      {
        id: "ml-12",
        title: "Decision Trees",
        resource: "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/",
        article:
          "Learn decision-tree splits, entropy, information gain, Gini impurity and tree construction."
      },

      {
        id: "ml-13",
        title: "Random Forest",
        resource: "https://www.geeksforgeeks.org/machine-learning/random-forest-classifier-using-scikit-learn/",
        article:
          "Understand how Random Forest combines multiple decision trees to improve robustness and generalization."
      },

      {
        id: "ml-14",
        title: "K-Nearest Neighbors",
        resource: "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/",
        article:
          "Learn KNN classification, distance metrics, choosing K and the importance of feature scaling."
      },

      {
        id: "ml-15",
        title: "K-Means Clustering",
        resource: "https://www.geeksforgeeks.org/machine-learning/k-means-clustering-introduction/",
        article:
          "Understand centroid initialization, cluster assignment, centroid updates and choosing K."
      },

      {
        id: "ml-16",
        title: "Confusion Matrix",
        resource: "https://www.geeksforgeeks.org/machine-learning/confusion-matrix-machine-learning/",
        article:
          "Learn true positives, true negatives, false positives and false negatives."
      },

      {
        id: "ml-17",
        title: "Precision, Recall and F1 Score",
        resource: "https://www.geeksforgeeks.org/machine-learning/precision-recall-and-f1-score/",
        article:
          "Understand the difference between precision, recall and F1 and when each metric matters."
      },

      {
        id: "ml-18",
        title: "ROC-AUC",
        resource: "https://www.geeksforgeeks.org/machine-learning/auc-roc-curve/",
        article:
          "Learn ROC curves, AUC and how classifiers can be compared across different decision thresholds."
      },

      {
        id: "ml-19",
        title: "Cross Validation",
        resource: "https://www.geeksforgeeks.org/machine-learning/cross-validation-machine-learning/",
        article:
          "Understand K-fold cross-validation and how it provides a more reliable estimate of model performance."
      },

      {
        id: "ml-20",
        title: "Ensemble Learning",
        resource: "https://www.geeksforgeeks.org/machine-learning/ensemble-learning/",
        article:
          "Learn bagging, boosting and stacking and why combining models can improve performance."
      }
    ]
  },


  // ============================================================
  // ARTIFICIAL INTELLIGENCE
  // ============================================================

  {
    id: "AI",
    title: "Artificial Intelligence",
    sections: [

      {
        id: "ai-1",
        title: "Introduction to Artificial Intelligence",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligence/",
        article:
          "Understand the goals of AI, intelligent agents, problem solving and major areas of artificial intelligence."
      },

      {
        id: "ai-2",
        title: "AI vs ML vs Deep Learning",
        resource: "https://www.geeksforgeeks.org/machine-learning/what-is-the-difference-between-ai-ml-and-dl/",
        article:
          "Understand the relationship between Artificial Intelligence, Machine Learning and Deep Learning."
      },

      {
        id: "ai-3",
        title: "Intelligent Agents",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/agents-artificial-intelligence/",
        article:
          "Learn what agents are, how they perceive environments and how they select actions."
      },

      {
        id: "ai-4",
        title: "Breadth First Search",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/breadth-first-search-bfs-for-artificial-intelligence/",
        article:
          "Understand BFS as an uninformed search strategy and its completeness and complexity."
      },

      {
        id: "ai-5",
        title: "Depth First Search",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/depth-first-search-dfs-for-artificial-intelligence/",
        article:
          "Learn DFS-based state-space exploration and its advantages and limitations."
      },

      {
        id: "ai-6",
        title: "Heuristic Search",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/heuristic-search-techniques-in-artificial-intelligence/",
        article:
          "Understand heuristic functions and how domain knowledge can make search more efficient."
      },

      {
        id: "ai-7",
        title: "A* Search Algorithm",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-implementation/",
        article:
          "Learn how A* combines actual path cost and heuristic estimates to find efficient paths."
      },

      {
        id: "ai-8",
        title: "Minimax Algorithm",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/minimax-algorithm-in-game-theory-set-1-introduction/",
        article:
          "Understand adversarial search and how Minimax chooses moves in two-player games."
      },

      {
        id: "ai-9",
        title: "Alpha-Beta Pruning",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/",
        article:
          "Learn how Alpha-Beta pruning removes unnecessary branches from a Minimax game tree."
      },

      {
        id: "ai-10",
        title: "Neural Networks",
        resource: "https://www.geeksforgeeks.org/machine-learning/neural-networks-a-beginners-guide/",
        article:
          "Understand neurons, weights, biases, activation functions and forward propagation."
      },

      {
        id: "ai-11",
        title: "Backpropagation",
        resource: "https://www.geeksforgeeks.org/machine-learning/backpropagation-in-neural-network/",
        article:
          "Learn how neural networks calculate gradients and update weights during training."
      },

      {
        id: "ai-12",
        title: "CNNs",
        resource: "https://www.geeksforgeeks.org/machine-learning/convolutional-neural-network-cnn-in-machine-learning/",
        article:
          "Study convolution, filters, feature maps, pooling, padding and why CNNs work well for images."
      },

      {
        id: "ai-13",
        title: "RNNs",
        resource: "https://www.geeksforgeeks.org/machine-learning/introduction-to-recurrent-neural-network/",
        article:
          "Understand recurrent neural networks and how they model sequential information."
      },

      {
        id: "ai-14",
        title: "LSTM and GRU",
        resource: "https://www.geeksforgeeks.org/deep-learning/lstm-architecture/",
        article:
          "Learn how LSTM and GRU architectures address limitations such as vanishing gradients in traditional RNNs."
      },

      {
        id: "ai-15",
        title: "Natural Language Processing",
        resource: "https://www.geeksforgeeks.org/nlp/natural-language-processing-nlp-tutorial/",
        article:
          "Study tokenization, preprocessing, embeddings, text classification and fundamental NLP tasks."
      },

      {
        id: "ai-16",
        title: "Word Embeddings",
        resource: "https://www.geeksforgeeks.org/nlp/word-embeddings-in-nlp/",
        article:
          "Understand how words can be represented as numerical vectors that capture semantic relationships."
      },

      {
        id: "ai-17",
        title: "Attention Mechanism",
        resource: "https://www.geeksforgeeks.org/deep-learning/attention-mechanism-in-deep-learning/",
        article:
          "Learn why attention allows models to focus on the most relevant parts of an input sequence."
      },

      {
        id: "ai-18",
        title: "Transformers",
        resource: "https://www.geeksforgeeks.org/nlp/advanced-natural-language-processing-interview-question/",
        article:
          "Understand self-attention, multi-head attention, positional encoding and the Transformer architecture."
      },

      {
        id: "ai-19",
        title: "Generative AI",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/generative-ai/",
        article:
          "Learn what generative AI is and how models generate text, images, code and other content."
      },

      {
        id: "ai-20",
        title: "Large Language Models",
        resource: "https://www.geeksforgeeks.org/artificial-intelligence/large-language-model-llm/",
        article:
          "Understand tokens, training, inference, context windows, embeddings and the basic idea behind LLMs."
      }
    ]
  },


  // ============================================================
  // SYSTEM DESIGN
  // ============================================================

  {
    id: "SystemDesign",
    title: "System Design",
    sections: [

      {
        id: "sd-1",
        title: "System Design Fundamentals",
        resource: "https://www.geeksforgeeks.org/system-design/system-design-tutorial/",
        article:
          "Learn the fundamentals of designing software systems and the difference between functional and non-functional requirements."
      },

      {
        id: "sd-2",
        title: "How to Approach a System Design Interview",
        resource: "https://www.geeksforgeeks.org/system-design/how-to-crack-system-design-round-in-interviews/",
        article:
          "Follow a structured interview process: requirements, estimation, high-level design, detailed design, APIs and trade-offs."
      },

      {
        id: "sd-3",
        title: "High-Level Design vs Low-Level Design",
        resource: "https://www.geeksforgeeks.org/system-design/high-level-design-hld-and-low-level-design-lld/",
        article:
          "Understand the difference between architectural design and class/component-level implementation design."
      },

      {
        id: "sd-4",
        title: "Scalability",
        resource: "https://www.geeksforgeeks.org/system-design/scalability-in-system-design/",
        article:
          "Learn vertical and horizontal scaling and how systems are designed to handle increasing traffic."
      },

      {
        id: "sd-5",
        title: "Load Balancing",
        resource: "https://www.geeksforgeeks.org/system-design/load-balancing-in-system-design/",
        article:
          "Understand how load balancers distribute traffic and improve availability and scalability."
      },

      {
        id: "sd-6",
        title: "Caching",
        resource: "https://www.geeksforgeeks.org/system-design/caching-system-design-concept/",
        article:
          "Learn how caching reduces latency and database load and understand common caching strategies."
      },

      {
        id: "sd-7",
        title: "CDN",
        resource: "https://www.geeksforgeeks.org/system-design/content-delivery-network-cdn/",
        article:
          "Understand how Content Delivery Networks serve static and cached content closer to users."
      },

      {
        id: "sd-8",
        title: "Database Selection",
        resource: "https://www.geeksforgeeks.org/system-design/sql-vs-nosql/",
        article:
          "Compare relational and NoSQL databases and understand how system requirements influence database selection."
      },

      {
        id: "sd-9",
        title: "Database Replication",
        resource: "https://www.geeksforgeeks.org/system-design/database-replication-in-system-design/",
        article:
          "Learn how replicas improve read scalability, availability and fault tolerance."
      },

      {
        id: "sd-10",
        title: "Database Sharding",
        resource: "https://www.geeksforgeeks.org/system-design/database-sharding/",
        article:
          "Understand horizontal partitioning, shard keys, scalability and common challenges of sharding."
      },

      {
        id: "sd-11",
        title: "CAP Theorem",
        resource: "https://www.geeksforgeeks.org/system-design/cap-theorem-in-system-design/",
        article:
          "Learn consistency, availability and partition tolerance and understand the trade-offs in distributed systems."
      },

      {
        id: "sd-12",
        title: "Message Queues",
        resource: "https://www.geeksforgeeks.org/system-design/message-queues/",
        article:
          "Understand asynchronous communication, producers, consumers, queues, retries and decoupled architectures."
      },

      {
        id: "sd-13",
        title: "Microservices",
        resource: "https://www.geeksforgeeks.org/system-design/microservices/",
        article:
          "Learn microservice architecture, service boundaries, independent deployment and communication between services."
      },

      {
        id: "sd-14",
        title: "Monolith vs Microservices",
        resource: "https://www.geeksforgeeks.org/system-design/monolithic-architecture-vs-microservices-architecture/",
        article:
          "Compare monolithic and microservice architectures and understand the trade-offs of each."
      },

      {
        id: "sd-15",
        title: "API Gateway",
        resource: "https://www.geeksforgeeks.org/system-design/api-gateway/",
        article:
          "Understand the role of an API Gateway in routing, authentication, rate limiting and request management."
      },

      {
        id: "sd-16",
        title: "Rate Limiting",
        resource: "https://www.geeksforgeeks.org/system-design/rate-limiting/",
        article:
          "Learn why APIs need rate limits and understand approaches such as token bucket and leaky bucket."
      },

      {
        id: "sd-17",
        title: "URL Shortener Design",
        resource: "https://www.geeksforgeeks.org/system-design/design-url-shortening-service/",
        article:
          "Practice designing a URL shortening service and discuss APIs, storage, hashing, scalability and caching."
      },

      {
        id: "sd-18",
        title: "Designing a Chat Application",
        resource: "https://www.geeksforgeeks.org/system-design/designing-a-chat-application/",
        article:
          "Study a practical system-design problem involving real-time communication, WebSockets, storage and scalability."
      },

      {
        id: "sd-19",
        title: "Designing Instagram",
        resource: "https://www.geeksforgeeks.org/system-design/design-instagram/",
        article:
          "Practice designing a large-scale social media platform with feeds, media storage, databases and caching."
      },

      {
        id: "sd-20",
        title: "System Design Interview Questions",
        resource: "https://www.geeksforgeeks.org/system-design/top-10-system-design-interview-questions-and-answers/",
        article:
          "Use this as a final revision resource for common system design interview problems."
      }
    ]
  },


  // ============================================================
  // DATA STRUCTURES & ALGORITHMS
  // ============================================================

  {
    id: "DSA",
    title: "Data Structures & Algorithms",
    sections: [

      {
        id: "dsa-1",
        title: "Time and Space Complexity",
        resource: "https://takeuforward.org/complexity-analysis/time-complexity-in-data-structures-and-algorithms",
        article:
          "Learn Big-O, Big-Theta, Big-Omega and how to calculate time and space complexity for common algorithms."
      },

      {
        id: "dsa-2",
        title: "Arrays",
        resource: "https://takeuforward.org/arrays",
        article:
          "Study array traversal, manipulation, prefix sums, hashing and common interview patterns."
      },

      {
        id: "dsa-3",
        title: "Strings",
        resource: "https://takeuforward.org/string",
        article:
          "Practice string manipulation, frequency counting, palindrome problems and advanced string patterns."
      },

      {
        id: "dsa-4",
        title: "Hashing",
        resource: "https://takeuforward.org/hashing",
        article:
          "Understand hash maps and hash sets and learn how hashing reduces many problems to near O(n)."
      },

      {
        id: "dsa-5",
        title: "Two Pointer Technique",
        resource: "https://takeuforward.org/arrays/two-pointer-approach",
        article:
          "Learn how two pointers can solve array and string problems efficiently without nested loops."
      },

      {
        id: "dsa-6",
        title: "Sliding Window",
        resource: "https://takeuforward.org/arrays/sliding-window-maximum",
        article:
          "Understand fixed and variable sliding-window patterns commonly used in subarray and substring problems."
      },

      {
        id: "dsa-7",
        title: "Sorting Algorithms",
        resource: "https://takeuforward.org/blogs/sorting",
        article:
          "Study Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort and their complexities."
      },

      {
        id: "dsa-8",
        title: "Binary Search",
        resource: "https://takeuforward.org/binary-search",
        article:
          "Learn classic binary search and advanced binary-search-on-answer problems."
      },

      {
        id: "dsa-9",
        title: "Linked Lists",
        resource: "https://takeuforward.org/linked-list",
        article:
          "Study singly and doubly linked lists, reversal, cycle detection, merging and fast/slow pointer techniques."
      },

      {
        id: "dsa-10",
        title: "Stacks",
        resource: "https://takeuforward.org/stack",
        article:
          "Learn stack operations and common problems involving parentheses, monotonic stacks and expression evaluation."
      },

      {
        id: "dsa-11",
        title: "Queues",
        resource: "https://takeuforward.org/queue",
        article:
          "Understand queues, circular queues, deques and their use in BFS and scheduling problems."
      },

      {
        id: "dsa-12",
        title: "Recursion",
        resource: "https://takeuforward.org/recursion",
        article:
          "Learn base cases, recursive calls, recursion trees and how to convert recursive thinking into code."
      },

      {
        id: "dsa-13",
        title: "Backtracking",
        resource: "https://takeuforward.org/recursion",
        article:
          "Learn how to explore choices, undo decisions and solve permutations, combinations, subsets and N-Queens."
      },

      {
        id: "dsa-14",
        title: "Binary Trees",
        resource: "https://takeuforward.org/binary-tree",
        article:
          "Study preorder, inorder, postorder, level-order traversal, height, diameter and common tree problems."
      },

      {
        id: "dsa-15",
        title: "Binary Search Trees",
        resource: "https://takeuforward.org/binary-search-tree",
        article:
          "Understand BST properties, insertion, deletion, searching, validation and lowest common ancestor."
      },

      {
        id: "dsa-16",
        title: "Heaps and Priority Queues",
        resource: "https://takeuforward.org/heap",
        article:
          "Learn min-heaps, max-heaps, heap operations and common top-K and scheduling problems."
      },

      {
        id: "dsa-17",
        title: "Graphs",
        resource: "https://takeuforward.org/graph",
        article:
          "Study graph representation, BFS, DFS, connected components, cycles and graph traversal."
      },

      {
        id: "dsa-18",
        title: "Shortest Path Algorithms",
        resource: "https://takeuforward.org/graph",
        article:
          "Learn BFS shortest paths, Dijkstra, Bellman-Ford and Floyd-Warshall and understand when each is applicable."
      },

      {
        id: "dsa-19",
        title: "Greedy Algorithms",
        resource: "https://takeuforward.org/greedy",
        article:
          "Learn how to identify problems where locally optimal choices can lead to a globally optimal solution."
      },

      {
        id: "dsa-20",
        title: "Dynamic Programming",
        resource: "https://takeuforward.org/dynamic-programming",
        article:
          "Understand overlapping subproblems, optimal substructure, memoization, tabulation and common DP patterns."
      },

      {
        id: "dsa-21",
        title: "Tries",
        resource: "https://takeuforward.org/trie",
        article:
          "Learn trie data structures and their use in prefix searches, dictionaries and string problems."
      },

      {
        id: "dsa-22",
        title: "Bit Manipulation",
        resource: "https://takeuforward.org/bit-manipulation",
        article:
          "Study bitwise operators, XOR tricks, checking bits, setting/clearing bits and common interview patterns."
      }
    ]
  },


  // ============================================================
  // OOPS
  // ============================================================

  {
    id: "OOP",
    title: "Object-Oriented Programming",
    sections: [

      {
        id: "oop-1",
        title: "Introduction to OOP",
        resource: "https://www.geeksforgeeks.org/interview-prep/oops-interview-questions/",
        article:
          "Understand object-oriented programming and why it is useful for organizing large software systems."
      },

      {
        id: "oop-2",
        title: "Classes and Objects",
        resource: "https://www.geeksforgeeks.org/java/classes-objects-java/",
        article:
          "Learn classes, objects, attributes, methods and object state."
      },

      {
        id: "oop-3",
        title: "Encapsulation",
        resource: "https://www.geeksforgeeks.org/java/encapsulation-in-java/",
        article:
          "Understand how encapsulation bundles data and methods and controls access to internal state."
      },

      {
        id: "oop-4",
        title: "Inheritance",
        resource: "https://www.geeksforgeeks.org/java/inheritance-in-java/",
        article:
          "Learn how child classes inherit properties and behavior from parent classes."
      },

      {
        id: "oop-5",
        title: "Polymorphism",
        resource: "https://www.geeksforgeeks.org/java/polymorphism-in-java/",
        article:
          "Understand compile-time and runtime polymorphism through overloading and overriding."
      },

      {
        id: "oop-6",
        title: "Abstraction",
        resource: "https://www.geeksforgeeks.org/java/abstraction-in-java-2/",
        article:
          "Learn how abstraction hides implementation details while exposing essential behavior."
      },

      {
        id: "oop-7",
        title: "Interface vs Abstract Class",
        resource: "https://www.geeksforgeeks.org/java/difference-between-abstract-class-and-interface-in-java/",
        article:
          "Compare abstract classes and interfaces and understand when each should be used."
      },

      {
        id: "oop-8",
        title: "Composition vs Inheritance",
        resource: "https://www.geeksforgeeks.org/system-design/composition-vs-inheritance/",
        article:
          "Understand has-a relationships through composition and is-a relationships through inheritance."
      },

      {
        id: "oop-9",
        title: "SOLID Principles",
        resource: "https://www.geeksforgeeks.org/system-design/solid-principle-in-software-engineering/",
        article:
          "Study Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation and Dependency Inversion."
      },

      {
        id: "oop-10",
        title: "Design Patterns",
        resource: "https://www.geeksforgeeks.org/system-design/system-design-tutorial/",
        article:
          "Get introduced to common design patterns such as Singleton, Factory, Observer, Strategy and Builder."
      }
    ]
  },


  // ============================================================
  // DBMS
  // ============================================================

  {
    id: "DBMS",
    title: "Database Management Systems",
    sections: [

      {
        id: "db-1",
        title: "DBMS Fundamentals",
        resource: "https://www.geeksforgeeks.org/dbms/commonly-asked-dbms-interview-questions/",
        article:
          "Understand what a DBMS is, why databases are used and how DBMSs manage data, integrity and concurrency."
      },

      {
        id: "db-2",
        title: "DBMS vs RDBMS",
        resource: "https://www.geeksforgeeks.org/dbms/difference-between-dbms-and-rdbms/",
        article:
          "Compare general database management systems with relational database management systems."
      },

      {
        id: "db-3",
        title: "Keys in DBMS",
        resource: "https://www.geeksforgeeks.org/dbms/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/",
        article:
          "Study primary, candidate, super, alternate, foreign and composite keys."
      },

      {
        id: "db-4",
        title: "SQL Fundamentals",
        resource: "https://www.geeksforgeeks.org/sql/sql-tutorial/",
        article:
          "Practice SELECT, INSERT, UPDATE, DELETE, filtering, grouping, ordering and aggregate functions."
      },

      {
        id: "db-5",
        title: "SQL Joins",
        resource: "https://www.geeksforgeeks.org/sql/sql-join-set-1-inner-left-right-and-full-joins/",
        article:
          "Understand INNER, LEFT, RIGHT and FULL joins and learn when each should be used."
      },

      {
        id: "db-6",
        title: "GROUP BY and HAVING",
        resource: "https://www.geeksforgeeks.org/sql/sql-group-by/",
        article:
          "Learn how to aggregate records by groups and filter grouped results using HAVING."
      },

      {
        id: "db-7",
        title: "Subqueries",
        resource: "https://www.geeksforgeeks.org/sql/sql-subquery/",
        article:
          "Understand nested queries, correlated subqueries, IN, EXISTS and scalar subqueries."
      },

      {
        id: "db-8",
        title: "Normalization",
        resource: "https://www.geeksforgeeks.org/dbms/normal-forms-in-dbms/",
        article:
          "Study 1NF, 2NF, 3NF and BCNF and understand how normalization reduces redundancy."
      },

      {
        id: "db-9",
        title: "Functional Dependencies",
        resource: "https://www.geeksforgeeks.org/dbms/functional-dependency-and-attribute-closure/",
        article:
          "Learn functional dependencies, attribute closure and their importance in normalization and keys."
      },

      {
        id: "db-10",
        title: "Transactions",
        resource: "https://www.geeksforgeeks.org/dbms/transaction-in-dbms/",
        article:
          "Understand database transactions and how multiple operations are treated as one logical unit."
      },

      {
        id: "db-11",
        title: "ACID Properties",
        resource: "https://www.geeksforgeeks.org/dbms/acid-properties-in-dbms/",
        article:
          "Learn Atomicity, Consistency, Isolation and Durability with practical examples."
      },

      {
        id: "db-12",
        title: "Concurrency Control",
        resource: "https://www.geeksforgeeks.org/dbms/concurrency-control-in-dbms/",
        article:
          "Understand how databases manage simultaneous transactions and prevent inconsistent results."
      },

      {
        id: "db-13",
        title: "Isolation Levels",
        resource: "https://www.geeksforgeeks.org/dbms/transaction-isolation-levels-dbms/",
        article:
          "Study Read Uncommitted, Read Committed, Repeatable Read and Serializable isolation levels."
      },

      {
        id: "db-14",
        title: "Indexes",
        resource: "https://www.geeksforgeeks.org/dbms/indexing-in-databases-set-1/",
        article:
          "Understand database indexes and how they improve read performance while adding storage and write overhead."
      },

      {
        id: "db-15",
        title: "B+ Trees",
        resource: "https://www.geeksforgeeks.org/dbms/b-tree-vs-b-tree/",
        article:
          "Learn why B/B+ tree structures are commonly used for database indexing."
      },

      {
        id: "db-16",
        title: "Deadlocks in DBMS",
        resource: "https://www.geeksforgeeks.org/dbms/deadlock-in-dbms/",
        article:
          "Understand how transactions can wait indefinitely for each other and how DBMSs detect or prevent deadlocks."
      },

      {
        id: "db-17",
        title: "SQL Interview Queries",
        resource: "https://www.geeksforgeeks.org/dbms/commonly-asked-dbms-interview-questions-set-2/",
        article:
          "Practice common interview SQL problems such as duplicates, second-highest salary and query-output questions."
      },

      {
        id: "db-18",
        title: "SQL vs NoSQL",
        resource: "https://www.geeksforgeeks.org/dbms/sql-vs-nosql/",
        article:
          "Compare relational and NoSQL databases based on schema, consistency, scalability and use cases."
      }
    ]
  },


  // ============================================================
  // JAVA
  // ============================================================

  {
    id: "Java",
    title: "Java",
    sections: [

      {
        id: "java-1",
        title: "Java Fundamentals",
        resource: "https://www.geeksforgeeks.org/java/java-interview-questions/",
        article:
          "Review Java syntax, variables, data types, operators, arrays, methods and fundamental language concepts."
      },

      {
        id: "java-2",
        title: "JDK, JRE and JVM",
        resource: "https://www.geeksforgeeks.org/java/difference-between-jdk-jre-and-jvm/",
        article:
          "Understand the Java development environment and how Java source code becomes executable bytecode."
      },

      {
        id: "java-3",
        title: "Java Memory Model",
        resource: "https://www.geeksforgeeks.org/java/java-memory-management/",
        article:
          "Learn stack, heap, objects, references and how Java manages memory."
      },

      {
        id: "java-4",
        title: "Garbage Collection",
        resource: "https://www.geeksforgeeks.org/java/garbage-collection-java/",
        article:
          "Understand automatic memory management and how the JVM identifies objects that are no longer reachable."
      },

      {
        id: "java-5",
        title: "OOP in Java",
        resource: "https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/",
        article:
          "Study encapsulation, inheritance, abstraction and polymorphism using Java examples."
      },

      {
        id: "java-6",
        title: "Strings and String Pool",
        resource: "https://www.geeksforgeeks.org/java/string-pool-in-java/",
        article:
          "Understand String immutability, the String pool and how Java handles String objects."
      },

      {
        id: "java-7",
        title: "StringBuilder vs StringBuffer",
        resource: "https://www.geeksforgeeks.org/java/stringbuilder-class-in-java-with-examples/",
        article:
          "Learn mutable string handling and the difference between StringBuilder and StringBuffer."
      },

      {
        id: "java-8",
        title: "Exception Handling",
        resource: "https://www.geeksforgeeks.org/java/exceptions-in-java/",
        article:
          "Study try, catch, finally, throw, throws, checked exceptions and unchecked exceptions."
      },

      {
        id: "java-9",
        title: "Collections Framework",
        resource: "https://www.geeksforgeeks.org/java/collections-in-java-2/",
        article:
          "Learn the Java Collections Framework and the purpose of List, Set, Queue and Map."
      },

      {
        id: "java-10",
        title: "ArrayList vs LinkedList",
        resource: "https://www.geeksforgeeks.org/java/arraylist-vs-linkedlist-java/",
        article:
          "Compare ArrayList and LinkedList based on memory, access, insertion, deletion and practical use cases."
      },

      {
        id: "java-11",
        title: "HashMap",
        resource: "https://www.geeksforgeeks.org/java/how-does-hashmap-work-in-java/",
        article:
          "Understand how HashMap stores key-value pairs, hashing, buckets, collisions and lookup."
      },

      {
        id: "java-12",
        title: "HashSet and TreeSet",
        resource: "https://www.geeksforgeeks.org/java/hashset-in-java/",
        article:
          "Learn how Set implementations store unique elements and understand HashSet vs TreeSet."
      },

      {
        id: "java-13",
        title: "Generics",
        resource: "https://www.geeksforgeeks.org/java/generics-in-java/",
        article:
          "Understand generic classes, methods and wildcards and why generics improve type safety."
      },

      {
        id: "java-14",
        title: "Multithreading",
        resource: "https://www.geeksforgeeks.org/java/java-multithreading/",
        article:
          "Learn threads, Runnable, thread lifecycle, synchronization and concurrent execution."
      },

      {
        id: "java-15",
        title: "Synchronization",
        resource: "https://www.geeksforgeeks.org/java/synchronized-in-java/",
        article:
          "Understand synchronized methods and blocks and how synchronization protects shared resources."
      },

      {
        id: "java-16",
        title: "Lambda Expressions",
        resource: "https://www.geeksforgeeks.org/java/lambda-expressions-java-8/",
        article:
          "Learn lambda syntax and how functional programming concepts are used in modern Java."
      },

      {
        id: "java-17",
        title: "Functional Interfaces",
        resource: "https://www.geeksforgeeks.org/java/functional-interfaces-java/",
        article:
          "Understand interfaces such as Predicate, Function, Consumer and Supplier."
      },

      {
        id: "java-18",
        title: "Stream API",
        resource: "https://www.geeksforgeeks.org/java/stream-in-java/",
        article:
          "Learn map, filter, reduce, collect and other Stream operations commonly asked in interviews."
      },

      {
        id: "java-19",
        title: "Comparable vs Comparator",
        resource: "https://www.geeksforgeeks.org/java/comparable-vs-comparator-in-java/",
        article:
          "Understand different ways to define ordering for Java objects."
      },

      {
        id: "java-20",
        title: "Java 8+ Features",
        resource: "https://www.geeksforgeeks.org/java/java-8-features/",
        article:
          "Review important Java 8 features including lambdas, functional interfaces, streams, Optional and default methods."
      }
    ]
  },


  // ============================================================
  // FULL STACK DEVELOPMENT
  // ============================================================

  {
    id: "FullStack",
    title: "Full Stack Development",
    sections: [

      {
        id: "full-1",
        title: "How the Web Works",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards",
        article:
          "Understand browsers, servers, HTTP requests, responses, URLs and how frontend and backend applications communicate."
      },

      {
        id: "full-2",
        title: "HTML Fundamentals",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
        article:
          "Learn HTML document structure, elements, attributes, headings, links, images and semantic markup."
      },

      {
        id: "full-3",
        title: "Semantic HTML",
        resource: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
        article:
          "Understand semantic elements and why meaningful HTML improves accessibility, maintainability and SEO."
      },

      {
        id: "full-4",
        title: "HTML Forms",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
        article:
          "Study forms, inputs, validation, labels and how browser form data is submitted."
      },

      {
        id: "full-5",
        title: "CSS Fundamentals",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
        article:
          "Learn selectors, properties, values, inheritance and the CSS cascade."
      },

      {
        id: "full-6",
        title: "CSS Box Model",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model",
        article:
          "Understand content, padding, border and margin and how element dimensions are calculated."
      },

      {
        id: "full-7",
        title: "Flexbox",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox",
        article:
          "Learn one-dimensional CSS layouts, alignment, justification, wrapping and flexible sizing."
      },

      {
        id: "full-8",
        title: "CSS Grid",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids",
        article:
          "Understand two-dimensional layouts using rows, columns, tracks and grid areas."
      },

      {
        id: "full-9",
        title: "Responsive Web Design",
        resource: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
        article:
          "Learn media queries, responsive layouts and techniques for building interfaces across screen sizes."
      },

      {
        id: "full-10",
        title: "JavaScript Fundamentals",
        resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        article:
          "Review variables, data types, operators, functions, objects, arrays, scope and modern JavaScript."
      },

      {
        id: "full-11",
        title: "JavaScript Closures",
        resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        article:
          "Understand lexical scope and closures, a very common JavaScript interview topic."
      },

      {
        id: "full-12",
        title: "Promises and Async/Await",
        resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
        article:
          "Learn asynchronous JavaScript, Promises, chaining, error handling and async/await."
      },

      {
        id: "full-13",
        title: "JavaScript Event Loop",
        resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",
        article:
          "Understand the call stack, task queue and event loop and why JavaScript can handle asynchronous operations."
      },

      {
        id: "full-14",
        title: "DOM Manipulation",
        resource: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        article:
          "Learn how JavaScript interacts with HTML through the DOM and handles browser events."
      },

      {
        id: "full-15",
        title: "Fetch API",
        resource: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        article:
          "Understand how frontend applications communicate with backend APIs using fetch."
      },

      {
        id: "full-16",
        title: "Node.js Fundamentals",
        resource: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        article:
          "Learn what Node.js is, why it is used for backend development and how its asynchronous architecture works."
      },

      {
        id: "full-17",
        title: "Node.js Event Loop",
        resource: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick",
        article:
          "Understand Node.js asynchronous execution, the event loop, timers and non-blocking I/O."
      },

      {
        id: "full-18",
        title: "Express.js Fundamentals",
        resource: "https://expressjs.com/en/starter/hello-world.html",
        article:
          "Learn how to create an Express server, define routes and handle HTTP requests and responses."
      },

      {
        id: "full-19",
        title: "Express Middleware",
        resource: "https://expressjs.com/en/guide/using-middleware.html",
        article:
          "Understand middleware functions and how authentication, logging, parsing and error handling can be implemented."
      },

      {
        id: "full-20",
        title: "REST APIs",
        resource: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
        article:
          "Learn REST principles, resources, HTTP methods, status codes and API design."
      },

      {
        id: "full-21",
        title: "MongoDB Fundamentals",
        resource: "https://www.mongodb.com/docs/manual/introduction/",
        article:
          "Understand MongoDB's document-oriented model, databases, collections and documents."
      },

      {
        id: "full-22",
        title: "MongoDB CRUD",
        resource: "https://www.mongodb.com/docs/manual/crud/",
        article:
          "Learn how to create, read, update and delete MongoDB documents."
      },

      {
        id: "full-23",
        title: "MongoDB Indexes",
        resource: "https://www.mongodb.com/docs/manual/indexes/",
        article:
          "Understand MongoDB indexes and how they improve query performance."
      },

      {
        id: "full-24",
        title: "React Fundamentals",
        resource: "https://react.dev/learn",
        article:
          "Learn components, JSX, props, state, events, conditional rendering and lists in React."
      },

      {
        id: "full-25",
        title: "React State",
        resource: "https://react.dev/learn/state-a-components-memory",
        article:
          "Understand state, why components re-render and how state is used to manage interactive UI."
      },

      {
        id: "full-26",
        title: "React useEffect",
        resource: "https://react.dev/reference/react/useEffect",
        article:
          "Learn how effects synchronize components with external systems and understand common dependency-array mistakes."
      },

      {
        id: "full-27",
        title: "React Hooks",
        resource: "https://react.dev/reference/react",
        article:
          "Review useState, useEffect, useContext, useMemo, useCallback, useRef and custom Hooks."
      },

      {
        id: "full-28",
        title: "React Performance",
        resource: "https://react.dev/reference/react/memo",
        article:
          "Understand memoization and techniques for preventing unnecessary React re-renders."
      },

      {
        id: "full-29",
        title: "Authentication",
        resource: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
        article:
          "Learn cookies, sessions, authentication state and how browser applications maintain user identity."
      },

      {
        id: "full-30",
        title: "JWT Authentication",
        resource: "https://jwt.io/introduction",
        article:
          "Understand JSON Web Tokens, their structure and how they are commonly used for stateless authentication."
      },

      {
        id: "full-31",
        title: "CORS",
        resource: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
        article:
          "Understand why browsers restrict cross-origin requests and how CORS enables controlled access."
      },

      {
        id: "full-32",
        title: "Web Security Basics",
        resource: "https://developer.mozilla.org/en-US/docs/Web/Security",
        article:
          "Review common web security concepts including XSS, CSRF, authentication, permissions and secure communication."
      }
    ]
  }

];

export function findModule(moduleId) {
  return studyModules.find((m) => m.id === moduleId);
}

export function findSection(moduleId, sectionId) {
  const m = findModule(moduleId);
  return m?.sections.find((s) => s.id === sectionId);
}
