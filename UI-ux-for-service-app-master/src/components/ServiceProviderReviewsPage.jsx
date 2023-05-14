import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Container } from '@material-ui/core';

function ServiceProviderReviewsPage() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/serviceprovider/admin_checklist')
      .then(response => {
        setProviders(response.data);
      });
  }, []);

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
              Verified: {provider.verified ? 'Yes' : 'No'}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default ServiceProviderReviewsPage;
