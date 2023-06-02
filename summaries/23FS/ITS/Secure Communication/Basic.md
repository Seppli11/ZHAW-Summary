# Basic - Secure Communication

These protocols should archive the following:

* Confidentially
  Only the endpoints can read the data
* Integrity
  The endpoint detect if the data has been modified
* Authenticity
  The endpoints notice if the other isn't genuine

Further goals can optionally be non-repudiation (an endpoint cannot deny having receive or sent data) and anonymity (the endpoints cannot identify them self).

Secure protocols don't help against all attacks:

* Software vulnerabilities (like SQL injection or buffer overflows)
* Malware
* DDoS Attack