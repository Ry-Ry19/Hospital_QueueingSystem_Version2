import ServiceCard from './ServiceCard';

const defaultServices = [
    {
      icon: 'fas fa-ambulance',
      priority: 'critical',
      title: 'Emergency Services',
      description: '24/7 emergency care with AI-powered triage system for immediate prioritization'
    },
    {
      icon: 'fas fa-heartbeat',
      priority: 'high',
      title: 'Cardiology',
      description: 'Advanced cardiac care with priority scheduling for acute conditions'
    },
    {
      icon: 'fas fa-baby',
      priority: 'medium',
      title: 'Pediatrics',
      description: 'Specialized child healthcare with growth monitoring and vaccination services'
    },
    {
      icon: 'fas fa-bone',
      priority: 'medium',
      title: 'Orthopedics',
      description: 'Bone and joint care with fracture prioritization system'
    },
    {
      icon: 'fas fa-brain',
      priority: 'high',
      title: 'Neurology',
      description: 'Advanced neurological care with stroke response prioritization'
    },
    {
      icon: 'fas fa-x-ray',
      priority: 'medium',
      title: 'Diagnostic Imaging',
      description: 'CT scans, MRI, and X-ray with priority scheduling'
    }
];

const ServicesGrid = ({ servicesData = defaultServices, limit }) => {
  const list = typeof limit === 'number' ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className="services-grid">
      {list.map((service, index) => (
        <ServiceCard
          key={service.title + index}
          icon={service.icon}
          priority={service.priority}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;