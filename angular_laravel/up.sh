#!/usr/bin/env sh

# docker起動
docker-compose up -d
docker-compose ps

# angular環境ファイルのコピー
docker-compose exec front bash -c "cp -f src/environments/environment.develop.ts src/environments/environment.ts"

# laravel環境ファイルのコピー
docker-compose exec php bash -c "cp -f .env.develop .env"

# composerパッケージのインストール
docker-compose exec php bash -c "composer install"

# laravel cache クリア
docker-compose exec php bash -c "php artisan config:cache && php artisan config:clear"