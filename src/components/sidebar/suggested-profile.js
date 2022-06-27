import PropTypes from 'prop-types';

export default function SuggestedProfile({ userDocId, userId, profileId, username }) {
  return <div>Suggested profile</div>;
}

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
