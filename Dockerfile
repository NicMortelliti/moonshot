# Use an official Ruby runtime as a parent image
FROM ruby:2.7.6

# Set the working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && \
  apt-get install -y \
  build-essential \
  nodejs \
  postgresql-client && \
  rm -rf /var/lib/apt/lists/*

# Install gems
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && \
  bundle install --jobs 4 && \
  rails db:create db:migrate db:seed

# Copy the application code
COPY . .

# Copy entrypoint script into the image and make it executable
COPY ./entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# Expose ports
EXPOSE 3000

# Set the entrypoint command
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

# Start the main process
CMD ["rails", "server", "-b", "0.0.0.0"]