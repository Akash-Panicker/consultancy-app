import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  const programmingLanguages = ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'];
  const frameworks = ['Django', 'Flask'];
  const libraries = ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV', 'TensorFlow'];
  const databases = ['SQL (MySQL)', 'MongoDB', 'SQLite'];

  const sections = [
    {
      title: 'Programming Languages',
      items: programmingLanguages,
    },
    {
      title: 'Frameworks',
      items: frameworks,
    },
    {
      title: 'Libraries',
      items: libraries,
    },
    {
      title: 'Databases',
      items: databases,
    },
  ];

  const footerStyles = {
    footer: {
      padding: '40px',
      backgroundColor: 'grey',
    },
    copyright: {
      marginTop: '20px',
      color: 'white',
    },
    contact: {
      marginTop: '10px',
      color: 'white',
    },
  };

  return (
  <Paper elevation={3} style={footerStyles.footer}>
    <Grid container spacing={4} justifyContent="space-evenly">
      {sections.map((section) => (
        <Grid item xs={6} sm={3} key={section.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {section.title}
          </Typography>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
    <Typography variant="body2" style={footerStyles.copyright}>
      &copy; {new Date().getFullYear()} Echelon Solutions
    </Typography>
    <Typography variant="body2" style={footerStyles.contact}>
      Contact us at{' '}
      <Link href="tel:+1234567890" color={"textSecondary"}>+123-456-7890</Link> or{' '}
      <Link href="mailto:info@consultancyfirm.com" color={"textSecondary"}>info@echelosolutions.com</Link>
    </Typography>
  </Paper>
);
};

export default Footer;
