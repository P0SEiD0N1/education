insert into auth(username,password)values('mirolim', 'mirolim123');



create table trainers(
    id serial primary key not null,
    name varchar(32) not null,
    position varchar(64) not null,
    description varchar(64) not null,
    image varchar(64) not null
);

create table clients(
    id serial not null,
    name varchar(64) not null,
    description varchar(64) not null,
    image varchar(64) not null
);

create table courses(
    id serial not null,
    price int not null,
    job varchar(64) not null,
    description varchar(64) not null,
    image varchar(64) not null,
    trainer_id int not null,
    FOREIGN KEY (trainer_id)
      REFERENCES trainers(id)
);

create table auth(
    id serial not null,
    username varchar(64) not null,
    password varchar(64) not null
);

create table users_edu(
    id serial not null,
    name varchar(64) not null,
    phone varchar(64) not null,
    email varchar(64) not null,
    image varchar(64) not null
);

create table events(
    id serial not null,
    description text not null,
    date timestamptz default current_timestamp,
    start_time int not null,
    end_time int not null,
    location varchar(64) not null,
    image varchar(64) not null
);

create table blogs(
    id serial not null,
    comments varchar(64) not null,
    description varchar(64) not null,
    title varchar(64) not null,
    date timestamptz not null,
    image varchar(64) not null
);








