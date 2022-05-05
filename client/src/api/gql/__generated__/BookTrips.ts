/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BookTrips
// ====================================================

export interface BookTrips_bookTrips_launches {
  __typename: "Launch";
  id: string;
  isBooked: boolean;
}

export interface BookTrips_bookTrips {
  __typename: "TripUpdateResponse";
  success: boolean;
  message: string | null;
  launches: (BookTrips_bookTrips_launches | null)[] | null;
}

export interface BookTrips {
  /**
   * Allows booking of multiple trips by users by providing a list of
   * launch IDs
   */
  bookTrips: BookTrips_bookTrips;
}

export interface BookTripsVariables {
  launchIds: (string | null)[];
}
