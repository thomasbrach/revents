import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Button,
  Divider,
  Grid,
  Header,
  Item,
  Reveal,
  Segment,
  Statistic,
} from "semantic-ui-react";
import { followUser, getFollowingDoc, unfollowUser } from "../../../app/firestore/firestoreService";
import { setFollowUser, setUnfollowUser } from "../profileActions";
import { CLEAR_FOLLOWINGS } from "../profileConstants";

const ProfileHeader = ({ profile, isCurrentUser }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const {followingUser} = useSelector(state => state.profile)

  useEffect(() => {
    if (isCurrentUser) return;
    setLoading(true);
    const fetchFolllowingDoc = async () => {
      try {
        const followingDoc = await getFollowingDoc(profile.id)
        if (followingDoc && followingDoc.exists) {
dispatch(setFollowUser())
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchFolllowingDoc().then(() => setLoading(false));
    return () => {
      dispatch({type: CLEAR_FOLLOWINGS})
    }
},[setLoading, isCurrentUser, dispatch, profile.id])


  const handleFollowUser = async () => {
    setLoading(true);
    try {
      await followUser(profile);
      dispatch(setFollowUser())
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

    const handleUnfollowUser = async () => {
      setLoading(true);
      try {
        await unfollowUser(profile);
        dispatch(setUnfollowUser())
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    return (
      <Segment>
        <Grid>
          <Grid.Column width={12}>
            <Item.Group>
              <Item>
                <Item.Image avatar size="small" src={profile.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Header
                    as="h1"
                    style={{ display: "block", marginBottom: 10 }}
                    content={profile.displayName}
                  />
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={4}>
            <Statistic.Group>
              <Statistic label="Followers" value={profile.followerCount || 0} />
              <Statistic label="Following" value={profile.followingCount || 0} />
            </Statistic.Group>
            {!isCurrentUser && (
              <>
                <Divider />
                <Reveal animated="move">
                  <Reveal.Content visible style={{ width: "100%" }}>
                    <Button fluid color="teal" content={followingUser ? 'Following' : 'Not following'} />
                  </Reveal.Content>
                  <Reveal.Content hidden style={{ width: "100%" }}>
                    <Button fluid color={followingUser ? 'red' : 'green'} content={followingUser ? 'Unfollow' : 'Follow'} onClick={followingUser ? () => handleUnfollowUser() : () => handleFollowUser()} loading={loading} />
                  </Reveal.Content>
                </Reveal>
              </>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  };

export default ProfileHeader;
