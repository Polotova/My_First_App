"use client";
import { useQuery } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchServices } from '../services/api';
const queryClient = new QueryClient();
const ServicesList = () => {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['services'], queryFn: fetchServices });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }
  return (
    <ul>
      {data.map((service: { id: number; title: string }) => (
        <li key={service.id}>{service.title}</li>
      ))}
    </ul>
  );
};
const ServicesPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Services</h1>
        <ServicesList />
      </div>
    </QueryClientProvider>
  );
};
export default ServicesPage;