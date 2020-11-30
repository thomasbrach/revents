import { format } from "date-fns";
import React, { useState } from "react";
import { Button, Grid, GridColumn, Header, TabPane } from "semantic-ui-react";
import ProfileForm from "./ProfileForm";

const AboutTab = ({ profile, isCurrentUser }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <TabPane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={`About ${profile.displayName}`}
          />
          {isCurrentUser && (
            <Button
              onClick={() => setEditMode(!editMode)}
              floated="right"
              basic
              content={editMode ? "Cancel" : "Edit"}
            />
          )}
        </Grid.Column>
        <GridColumn width={16}>
          {editMode ? (
            <ProfileForm profile={profile} />
          ) : (
            <>
              <div style={{ marginBottom: 10 }}>
                <strong>
                  Member since: {format(profile.createdAt, "dd MMM yyyy")}
                </strong>
                <div>{profile.description || null}</div>
              </div>
            </>
          )}
        </GridColumn>
      </Grid>
    </TabPane>
  );
};

export default AboutTab;
