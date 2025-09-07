# 🚀 URL Shortener - High Scale System Design

A highly scalable **URL Shortener** built with **system design principles** in mind.  
This project demonstrates how to design and implement a URL shortener that can handle **100M+ requests per month** efficiently using **sharding, Redis caching, Kafka for event streaming, and custom encoding techniques**.  

---

## ✨ Features  

- 🔗 Shorten URLs with a unique custom-encoded key.  
- ⚡ High performance – optimized to handle massive traffic.  
- 🗂 **Database Sharding** – distributes data across multiple shards for scalability.  
- 🧠 **Redis Caching** – stores frequently accessed short URLs for low-latency responses.  
- 📡 **Kafka Integration** – event-driven architecture for analytics, logging, and monitoring.  
- 🔐 **Custom Encoding** – generates short, collision-resistant keys.  
- 📊 **Analytics Ready** – extendable to track clicks, referrers, devices, and geo-locations.  
- 🏗 **System Design Oriented** – focuses on architecture that supports horizontal scaling.  

---

## 🏛 Architecture Overview  
<img width="825" height="466" alt="url_shortener_architecture" src="https://github.com/user-attachments/assets/e176ea82-cff7-44dc-8591-3d8431a7ec11" />



- **API Layer**: Handles requests to shorten or resolve URLs.  
- **Sharded Database**: Ensures data distribution across multiple databases for large-scale storage.  
- **Redis**: Provides in-memory caching for hot URLs to reduce DB load.  
- **Kafka**: Streams events (e.g., redirects, analytics) asynchronously.  
- **Custom Encoding**: Converts numeric IDs into short strings (e.g., base62).  

---

## ⚙️ Tech Stack  

- **Backend**: Node.js / Express
- **Database**: MongoDB
- **Cache**: Redis  
- **Messaging**: Apache Kafka  
- **Containerization**: Docker 
- **Monitoring**: Prometheus + Grafana

---

## 📈 Scalability  

- Designed to handle **100M+ requests/month** (~38 requests/sec).  
- Horizontally scalable with **API server replication** behind a load balancer.  
- Sharded databases ensure **no single point of failure**.  
- Redis caching provides **low-latency lookups**.  
- Kafka allows **real-time data streaming** without slowing down core API performance.  

---



<p align="center">
  Developed by <b>Kumar Praveer</b>
</p>



