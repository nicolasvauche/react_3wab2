const IconLink = ({ linkUrl, iconSrc, iconClass, iconAlt }) => {
  return (
    <a href={linkUrl} target="_blank">
      <img src={iconSrc} className={iconClass} alt={iconAlt} />
    </a>
  );
};

export default IconLink;
