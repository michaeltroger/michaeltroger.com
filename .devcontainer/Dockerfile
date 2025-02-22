FROM mcr.microsoft.com/devcontainers/jekyll:2-bullseye

COPY docs/ .

RUN bundle install

ENTRYPOINT bundle exec jekyll serve
