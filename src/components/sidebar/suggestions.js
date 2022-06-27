import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfiles();
    }
  }, [userId, following]);

  if (!profiles) {
    return <Skeleton count={1} height={150} />;
  }

  return (
    <>
      {profiles.length > 0 ? (
        <div className="rounded flex flex-col">
          <div className="text-sm flex items-center justify-between mb-2">
            <p className="font-bold text-gray-base">Suggestions for you</p>
          </div>
          <div>
            {profiles.map((profile) => (
              <SuggestedProfile
                key={profile.docId}
                userDocId={profile.docId}
                userId={profile.userId}
                profileId={profile.userId}
                username={profile.username}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
