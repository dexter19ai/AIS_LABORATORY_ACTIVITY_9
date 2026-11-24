# Activity 9 implementation notes

This working copy preserves the supplied dashboard and audit scoring logic. The original ZIP is unchanged.

- The supplied configuration has both storage encryption properties false, inconsistent with the guide. Both were set true to match its intended baseline.
- Added administrator MFA (false initially) and disclosure policy (true initially) properties and boolean checks.
- Added the missing remediation function and button, fixing credentials, firewall, logging, and MFA without changing encryption or disclosure.
- Run the initial audit (33%), apply simulated patches, then run the final audit (100%) in the same browser session. Navigate to Audit history for evidence. Refresh resets configuration and history.
- The simulation does not modify real cloud resources. A 100% score refers only to six implemented checks.
- Submit your own screenshots, responsibility matrix, PDF report and repository link; this package contains source code, not a completed report.
