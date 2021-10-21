import React from 'react';
// import axios from 'axios';

const GitProfile = () => {
  // const [profile, setProfile] = useState({
  //   loading: false,
  //   data: [],
  //   error: false,
  // });

  // // let content = null;

  // // Repository name,
  // // Repository description.
  // // Number of stars for the repo.
  // // Number of issues for the repo.
  // // Username and avatar of the repo owner.

  // // profile.loading && (content = <p>Loading ...</p>);
  // // profile.error && (content = <p>Ooops ! An error occured ...</p>);

  // const API =
  //   'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc';

  // useEffect(() => {
  //   setProfile({
  //     loading: true,
  //     data: [],
  //     error: false,
  //   });

  //   axios(API)
  //     .then((resp) => resp.data)
  //     .then((data) => {
  //       setProfile({
  //         loading: false,
  //         data: data,
  //         error: false,
  //       });
  //       console.log(data);
  //     })
  //     .catch((err) =>
  //       setProfile({
  //         loading: false,
  //         data: [],
  //         error: true,
  //       })
  //     );
  // }, []);
  return <div>my data</div>;
};

export default GitProfile;
