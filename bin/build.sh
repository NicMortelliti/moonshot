# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
DISABLE_DATABASE_ENVIRONMENT_CHECK=1
bundle exec rake db:drop db:migrate db:seed