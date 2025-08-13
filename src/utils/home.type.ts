export interface HomeProps {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      logo: {
        url: string;
      };
      banner: {
        image: {
          url: string;
        };
        title: string;
        subtitle: string;
      };
      about: {
        title: string;
        subtitle: string;
        text: string;
        mission: string;
        vision: string;
        values: string;
      };
      services: {
        title: string;
        subtitle: string;
        text: string;
        types: ServiceTypeProps[];
      };
      projects: {
        title: string;
        subtitle: string;
        text: string;
        project: ProjectProps[];
      };
      contact: {
        phone: string;
        email: string;
        address: string;
        time: string;
      };
      company: string;
      cta_button: {
        button: boolean;
        button_title: string;
        button_url: string;
      };
    };
  };
}

interface ServiceTypeProps {
  type_title: string;
  type_text: string;
}

interface ProjectProps {
  name: string;
  image: {
    url: string;
  };
  description: string;
}
