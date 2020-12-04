import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Card, Grid, GridColumn, Header, TabPane } from "semantic-ui-react";
import { getFollowersCollection, getFollowingCollection } from "../../../app/firestore/firestoreService";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";
import { listenToFollowers, listenToFollowings } from "../profileActions";
import ProfileCard from "./ProfileCard";

const FollowingTab = ({ profile, activeTab }) => {
  const dispatch = useDispatch();
  const { followings, followers } = useSelector((state) => state.profile);
  
  useFirestoreCollection({
    query:
      activeTab === 3
        ? () => getFollowersCollection(profile.id)
        : () => getFollowingCollection(profile.id),
    data: (data) =>
      activeTab === 3
        ? dispatch(listenToFollowers(data))
        : dispatch(listenToFollowings(data)),
    deps: [activeTab, dispatch],
  });

  return (
    <TabPane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={activeTab === 3 ? 'Followers' : 'Following'}
          />
        </Grid.Column>
        <GridColumn width={16}>
          <Card.Group itemsPerRow={5}>
            {activeTab === 3 && followers.map(profile => (<ProfileCard key={profile.id} profile={profile} />))}
            {activeTab === 4 && followings.map(profile => (<ProfileCard key={profile.id} profile={profile} />))}
          </Card.Group>
        </GridColumn>
      </Grid>
    </TabPane>
  );
};

export default FollowingTab;
