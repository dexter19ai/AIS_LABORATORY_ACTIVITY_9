"use strict";

// Simulated settings only. Refreshing the page restores these starter values.
const cloudConfig = {
  adminCredentials: { unique: true, defaultPasswordChanged: false },
  firewall: { unrestrictedAdminAccess: true, adminSource: "0.0.0.0/0" },
  logging: { enabled: false, retentionDays: 30, protectedFromChanges: false },
  // Align the starting encryption state with the supplied student guide.
  storage: { encrypted: true, encryptedInTransit: true },
  // TODO 1 completed: initial MFA fails; disclosure policy passes.
  administratorMFA: { enforced: false },
  disclosurePolicy: { present: true },
 
};
