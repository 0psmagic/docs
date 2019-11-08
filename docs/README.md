# Introduction

## What is OpsMagic?

OpsMagic is a platform to visualise time series data for any IT or IOT application and performs incident management. It notifies the right people and reduce the response time. After integrating OpsMagic to receive time series data of yours:

1.  You can configure Graphs according to your needs and set alerts on the Graphs.
2.  Alerts can be automatically routed to the right individual or teams that can address them in real-time.

OpsMagic supports E-mail and SMS notification channels for now, we are working on integrating other channels.

## What is a Services?

Service in OpsMagic represents a component, microservice, sensors, Database or piece of infrastructure a team manages and monitors.

New services should be attached to escalation policies. Every services will create a unique incident Key to access the services using REST api.

## What is Escalation Policies?

Escalation policies connect services to individual users or a team or a schedule, it is designed to notify a single target at a time until one individual acknowledges the incident.

When you create a new Escalation Policies you can select multiple levels of escalations. In each level you need to specify the time frame to pass the escalated incident to next level, if the incident is un-noticed. 

## What is Teams?

Teams are designed to group users according to services classification. You can create a team and attach it in Escalation policie or in schedules according to your needs.

## What is Schedules?

Schedules are used to determine who will be notified when an incident is triggered, in a schedule either a user or a team can be on-call at a time. 

It allows you to add users or a team to a schedule on a daily or weekly rotation. You can use layers to clearly organize shifts visually, so that you can tell at-a-glance what days and hours a shift covers

## What is Dashboard?

OpsMagic comes with the integrated Grafana Dashboard, it allow you to query, visualize and set alert on the metrics.
