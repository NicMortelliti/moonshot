#!/bin/bash
set -e

# Run migrations
bundle exec rails db:create db:migrate db:seed

# Then start the server
exec "$@"