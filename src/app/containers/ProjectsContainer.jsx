import * as React from 'react';
import { MockCreditScore } from '../components/MockCreditScore';
import { Grid } from '../components/Grid';
import { SectionTitle } from '../components/SectionTitle';

export const ProjectsContainer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className="layoutWidth">
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <SectionTitle>Projects</SectionTitle>
              </Grid>
            </Grid>
            <MockCreditScore />
          </Grid>
        </Grid>
        {/* @TODO: Add more projects */}
      </Grid>
    </Grid>
  );
};