import React, { useState, useEffect } from 'react';

const NearMe = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        // Replace with actual coordinates from user's location (hardcoded for now)
        const lat = 23.8103; // Example: Dhaka coordinates
        const lng = 90.4125;

        const response = await fetch(`http://localhost:5000/api/groceryStores/nearby?lat=${lat}&lng=${lng}`);
        if (!response.ok) {
          throw new Error('Failed to fetch stores');
        }

        const data = await response.json();
        setStores(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Grocery Stores Near Me</h1>
      {loading ? (
        <p style={styles.loading}>Loading stores...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : stores.length > 0 ? (
        <ul style={styles.storeList}>
          {stores.map(store => (
            <li key={store._id} style={styles.storeItem}>
              <h2 style={styles.storeName}>{store.name}</h2>
              <p style={styles.storeDetails}>
                Address: {store.address}
              </p>
              <p style={styles.storeDetails}>
                Distance: Within 5km
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noStores}>No stores found within 5km.</p>
      )}
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  loading: {
    fontSize: '18px',
    color: '#888',
  },
  error: {
    fontSize: '18px',
    color: 'red',
  },
  storeList: {
    listStyleType: 'none',
    padding: 0,
  },
  storeItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    textAlign: 'left',
  },
  storeName: {
    fontSize: '20px',
    margin: '0 0 10px',
  },
  storeDetails: {
    margin: '5px 0',
    color: '#555',
  },
  noStores: {
    fontSize: '18px',
    color: '#888',
  },
};

export default NearMe;
