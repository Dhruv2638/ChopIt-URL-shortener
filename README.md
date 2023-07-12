# chopIt - URL Shortener

### What is a URL shortening service?
A URL shortening service is a website that substantially shortens a Uniform Resource Locator (URL). The short URL redirects the client to the URL of the original website. Some popular public-facing URL shortening services are tinyurl.com and bitly.com1.

![Alt text](https://systemdesign.one/url-shortening-system-design/what-is-url-shortening-service.webp)

## Requirements

### Functional Requirements

1) Service should be able to create shortened url/links against a long url
2) Click to the short URL should redirect the user to the original long URL
3) Shortened link should be as small as possible
4) Users can create custom url with maximum character limit of 16
5) Service should collect metrics like most clicked links
6) Once a shortened link is generated it should stay in system for lifetime

### Non-Functional Requirements:

1) Service should be up and running all the time
2) URL redirection should be fast and should not degrade at any point of time (Even during peak loads)
3) Service should expose REST API’s so that it can be integrated with third party applications