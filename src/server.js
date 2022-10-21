/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import customRender from './utils/customRender';
import authCheck from './middlewares/authCheck';
import indexRouter from './router/render/renderRouter';
import apiAlbumsCard from './router/api/apiAlbumsCard';
import uploadImage from './router/api/apiUpload';

import regAndAuth from './router/api/regAndAuth';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;
const FileStore = store(session);

app.engine('jsx', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const sessionConfig = {
  name: 'user_sid',
  store: new FileStore(),
  secret: 'vndsjn',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/auth', regAndAuth);
app.use('/api', apiAlbumsCard);
app.use('/image', uploadImage);
app.use(authCheck);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
