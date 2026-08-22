import MDP from './markdownpage';

const distributedSystems = `
# Distributed Systems Lab
---

An ongoing Java project focused on learning distributed systems by building increasingly complex systems from scratch. 
The project begins with basic TCP communication and concurrency, gradually progressing toward multi-node coordination, 
fault tolerance, replication, leader election, and consensus.

Rather than relying on frameworks, the goal is to understand the underlying problems that distributed systems solve and the engineering 
tradeoffs behind them.

### Learning Path

- TCP Networking
- Concurrency & Multithreading
- Thread Pools
- Custom Protocols
- Persistent Storage
- Multi-Node Communication
- Service Discovery
- Failure Detection
- Distributed Job Queues
- Replication
- Leader Election
- Consensus

## Progress

### 01 - TCP Echo Server

Built a basic TCP client and server from scratch in Java. The client establishes a connection to the server, sends messages, and receives responses.

**Learned:**
- TCP/IP
- Sockets
- Ports
- Client/server communication
- Blocking I/O

`;

export default function Article() {
  return <MDP title="Distributed Systems Lab" article={distributedSystems} />;
}