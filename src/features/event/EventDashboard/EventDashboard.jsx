import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>Left column</h2>
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Right column</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;