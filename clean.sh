#!/bin/bash

MODULES=node_modules    # Nodeモジュールディレクトリ
BOWER=vendor            # Bowerのインストール先
SASSCACHE=.sass-cache
GREEN="\033[32m"        # 緑
YELLOW="\033[33m"       # 黄
CLREND="\033[0m"        # 白

install_modules()
{
    echo "${GREEN}Installing node modules...${CLREND}"
    npm install
}

install_bower()
{
    echo "${GREEN}Installing bower packages...${CLREND}"
    bower install
}


if [ -d $SASSCACHE ]; then
    echo "${GREEN}Removing sass cache files...${CLREND}"
    rm -rf $SASSCACHE
fi


if [ -d $MODULES ]; then
    echo "${GREEN}Removing node modules...${CLREND}"
    rm -rf $MODULES
    install_modules
else
    echo "${YELLOW}Not found modules.${CLREND}"
    install_modules
fi


if [ -d $BOWER ]; then
    echo "${GREEN}Removing bower packages...${CLREND}"
    rm -rf $BOWER
    install_bower
else
    echo "${YELLOW}Not found bower packages.${CLREND}"
    install_bower
fi

echo "${GREEN}Done!${CLREND}"


