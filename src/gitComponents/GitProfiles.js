import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from '../css/GitProfile.module.css';
import ReactPaginate from 'react-paginate';
import ProfilesCard from './ProfilesCard';
import Loader from './Loader';

const GitProfiles = () => {
  const [profile, setProfile] = useState({
    loading: false,
    data: [],
    error: false,
  });

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let content = null;

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const API =
    'https://api.github.com/search/repositories?q=created:>2021-09-22&sort=stars&order=desc';

  useEffect(() => {
    setProfile({
      loading: true,
      data: [],
      error: false,
    });

    axios(API)
      .then((resp) => resp.data)
      .then((res) => res.items)
      .then((data) => {
        setProfile({
          loading: false,
          data: data,
          error: false,
        });

        console.log(data);
      })
      .catch((err) =>
        setProfile({
          loading: false,
          data: [],
          error: true,
        })
      );
  }, []);

  profile.loading && (content = <Loader />);
  profile.error &&
    (content = (
      <p className={Styles.loaderContainer}>Ooops ! An error occured ...</p>
    ));

  const calcDate = (postDate) => {
    let current = new Date();
    return Math.floor(Math.abs(postDate - current) / (1000 * 60 * 60 * 24));
  };

  const displayUsers =
    profile.data.length > 0 &&
    profile.data
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user, index) => {
        return <ProfilesCard {...user} key={user.id} calcDate={calcDate} />;
      });

  const pageCount = Math.ceil(profile.data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={Styles.profileContainer}>
      <p className={Styles.profileHeader}> GitHub Profiles</p>
      {profile.data.length > 0 ? (
        <div className={Styles.profileCards}>
          {displayUsers}
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={Styles.paginationBttns}
            previousLinkClassName={Styles.previousBttn}
            nextLinkClassName={Styles.nextBttn}
            disabledClassName={Styles.paginationDisabled}
            activeClassName={Styles.paginationActive}
          />
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default GitProfiles;
