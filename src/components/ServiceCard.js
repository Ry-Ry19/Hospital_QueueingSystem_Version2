
const ServiceCard = ({ icon, priority, title, description }) => {
  const getPriorityText = () => {
    switch(priority) {
      case 'critical': return 'Critical Care';
      case 'high': return 'High Priority';
      case 'medium': return 'Medium Priority';
      default: return 'Standard Care';
    }
  };

  return (
    <div className="service-card">
      <i className={`${icon} service-icon`}></i>
      <span className={`priority-tag ${priority}`}>
        {getPriorityText()}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;