import React from 'react';

const ApiExplanation = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Understanding APIs, Methods & CRUD Operations</h1>

      <h2 style={styles.subHeading}>Types of APIs</h2>
      <p style={styles.paragraph}>
        APIs (Application Programming Interfaces) allow different software systems to communicate with each other. 
        There are different types of APIs that are used based on the use case. The most common types of APIs are:
      </p>
      <ul style={styles.list}>
        <li><strong>Open APIs (Public APIs)</strong>: These are available for external users (developers). Examples include the Twitter API or Google Maps API.</li>
        <li><strong>Partner APIs</strong>: These are shared between two organizations or companies to enable specific use cases. Typically, they are not open to the public.</li>
        <li><strong>Internal APIs (Private APIs)</strong>: These are used within an organization to streamline processes and are not exposed to the external world.</li>
        <li><strong>Composite APIs</strong>: These allow developers to access multiple endpoints in one call. These are especially useful when working with microservices architectures.</li>
      </ul>

      <h2 style={styles.subHeading}>Common HTTP Methods to Fetch Data</h2>
      <p style={styles.paragraph}>
        In RESTful APIs, various HTTP methods are used to interact with data. The common HTTP methods used for fetching data are:
      </p>
      <ul style={styles.list}>
        <li><strong>GET</strong>: Used to retrieve data from the server. This is a read-only operation, meaning it does not modify any data.</li>
        <li><strong>POST</strong>: Used to send data to the server, typically to create a new resource.</li>
        <li><strong>PUT</strong>: Used to update an existing resource on the server with new data.</li>
        <li><strong>PATCH</strong>: Similar to PUT, but it only updates specific parts of a resource.</li>
        <li><strong>DELETE</strong>: Used to remove a resource from the server.</li>
      </ul>

      <h2 style={styles.subHeading}>1. Create (POST)</h2>
      <p style={styles.paragraph}>
        <strong>What is it?</strong><br />
        The <strong>Create</strong> operation allows you to add new data to the server. This is typically done by sending a <strong>POST</strong> request to the API.
      </p>
      <p style={styles.paragraph}>
        <strong>Example Use Case:</strong><br />
        Imagine you are using a website where you can post new blog articles. When you click on "Submit" after filling in a new blog post form, a <strong>POST</strong> request is sent to the server to save that new post.
      </p>
      <p style={styles.paragraph}>
        <strong>Real-life Analogy:</strong><br />
        This is like writing a new entry in a notebook. You're adding new information to the collection.
      </p>

      <h2 style={styles.subHeading}>2. Read (GET)</h2>
      <p style={styles.paragraph}>
        <strong>What is it?</strong><br />
        The <strong>Read</strong> operation allows you to retrieve data from the server. This is done with a <strong>GET</strong> request. It doesn’t modify anything on the server, it only fetches data.
      </p>
      <p style={styles.paragraph}>
        <strong>Example Use Case:</strong><br />
        When you visit a website and you see a list of products, a <strong>GET</strong> request is made to fetch that product data from the server. Similarly, when you view your profile on social media, the server sends your information back to the page you’re viewing.
      </p>
      <p style={styles.paragraph}>
        <strong>Real-life Analogy:</strong><br />
        Think of this as reading a book or opening a file. You’re not changing anything; you’re just viewing it.
      </p>

      <h2 style={styles.subHeading}>3. Update (PUT or PATCH)</h2>
      <p style={styles.paragraph}>
        <strong>What is it?</strong><br />
        The <strong>Update</strong> operation allows you to change existing data on the server. This is done using a <strong>PUT</strong> or <strong>PATCH</strong> request. The difference is subtle:
        <ul>
          <li><strong>PUT</strong> typically replaces the entire resource (e.g., updating a full record).</li>
          <li><strong>PATCH</strong> is used for partial updates (e.g., changing just one field of a record).</li>
        </ul>
      </p>
      <p style={styles.paragraph}>
        <strong>Example Use Case:</strong><br />
        If you’re editing a post you’ve written on a blog or updating your contact information, a <strong>PUT</strong> or <strong>PATCH</strong> request is sent to update that specific data.
      </p>
      <p style={styles.paragraph}>
        <strong>Real-life Analogy:</strong><br />
        This is like editing a paragraph in a document you’ve already written. You’re changing parts of it, not creating a new one from scratch.
      </p>

      <h2 style={styles.subHeading}>4. Delete (DELETE)</h2>
      <p style={styles.paragraph}>
        <strong>What is it?</strong><br />
        The <strong>Delete</strong> operation allows you to remove data from the server. This is done with a <strong>DELETE</strong> request.
      </p>
      <p style={styles.paragraph}>
        <strong>Example Use Case:</strong><br />
        If you delete an item from your shopping cart or remove a post from a blog, a <strong>DELETE</strong> request is sent to remove that data from the server.
      </p>
      <p style={styles.paragraph}>
        <strong>Real-life Analogy:</strong><br />
        This is like crossing out a sentence or erasing something from a document. You’re removing it completely.
      </p>

      <h2 style={styles.subHeading}>Summary of CRUD Operations:</h2>
      <ul style={styles.list}>
        <li><strong>Create (POST)</strong>: Add new data to the server.</li>
        <li><strong>Read (GET)</strong>: Retrieve and view data from the server.</li>
        <li><strong>Update (PUT/PATCH)</strong>: Modify existing data on the server.</li>
        <li><strong>Delete (DELETE)</strong>: Remove data from the server.</li>
      </ul>

      <p style={styles.paragraph}>
        These operations are the foundation of interacting with an API and are the basic methods used to manage data in most web applications.
      </p>

      <h2 style={styles.subHeading}>How Are These Operations Used?</h2>
      <p style={styles.paragraph}>
        APIs work by receiving requests (such as "add this item," "get this data," "update that record," or "delete this entry") and returning responses (such as the requested data or a success message). Understanding these CRUD operations helps users understand how data is managed on the internet, from creating an account to deleting posts or retrieving important information from a website.
      </p>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
  },
  subHeading: {
    color: '#444',
    fontSize: '1.5rem',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#555',
    textAlign: 'left',
    marginBottom: '10px',
  },
  list: {
    marginTop: '10px',
    color: '#555',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
};

export default ApiExplanation;
