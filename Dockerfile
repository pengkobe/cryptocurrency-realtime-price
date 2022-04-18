 FROM node:alpine
 LABEL name="yipeng" 

 RUN groupadd -r cryptocurrency-price \
   && useradd -m -r -g cryptocurrency-price cryptocurrency-price
 USER cryptocurrency-price

 RUN mkdir -p /usr/src/cryptocurrency-price
 
 ADD . /usr/src/cryptocurrency-price
 WORKDIR /usr/src/cryptocurrency-price
 
 RUN npm install --registry=https://registry.npm.taobao.org

 ENV PORT 7001
 
 EXPOSE 7001
 
 CMD ["bin/sh"]