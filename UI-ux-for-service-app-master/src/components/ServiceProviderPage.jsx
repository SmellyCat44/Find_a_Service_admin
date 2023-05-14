import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, CardActions, Container } from '@material-ui/core';

function ServiceProviderPage() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/serviceprovider/admin_checklist')
      .then(response => {
        setProviders(response.data);
      });
  }, []);//ok

  const verifyProvider = (providerId) => {
    // axios.post('http://localhost:8082/serviceprovider/admin_verify', { provider_id: providerId })
      
    axios.post("http://localhost:8082/serviceprovider/admin_verify?provider_id="+providerId)
    .then(response => {
        if (response.data === 1) {
          setProviders(providers.map(provider => provider.providerId === providerId ? { ...provider, verified: 1 } : provider));
        }
      });
  };

  const rejectProvider = (providerId) => {
    axios.post("http://localhost:8082/serviceprovider/admin_reject?provider_id="+providerId)
      .then(response => {
        if (response.data === 1) {
          setProviders(providers.map(provider => provider.providerId === providerId ? { ...provider, verified: -1 } : provider));
        }
      });
  };

  const requestUpdate = (providerId) => {
    axios.post("http://localhost:8082/serviceprovider/admin_request?provider_id="+providerId)
      .then(response => {
        if (response.data === 1) {
          setProviders(providers.map(provider => provider.providerId === providerId ? { ...provider, verified: 2 } : provider));
        }
      });
  };

  return (
    <Container>
      {providers.map(provider => (
        <Card key={provider.providerId} style={{ marginBottom: '15px' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Provider ID: {provider.providerId}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Address: {provider.providerAdd} | Description: {provider.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Verified: {provider.verified === 1 ? 'Yes' : provider.verified === -1 ? 'Rejected' : provider.verified === 2 ? 'Requested Update' : 'No'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => verifyProvider(provider.providerId)}>Verify</Button>
            <Button size="small" color="secondary" onClick={() => rejectProvider(provider.providerId)}>Reject</Button>
            <Button size="small" onClick={() => requestUpdate(provider.providerId)}>Request Update</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default ServiceProviderPage;
