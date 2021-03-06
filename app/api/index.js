export const logIn = (callback) => {
  VK.Auth.login(function() {
    callback();
  }, 1034);
};

export const logOut = (callback) => {
  VK.Auth.logout(function() {
    callback();
  });
};

export const loadUserData = (callback) => {
  VK.Api.call('users.get', {fields: 'photo_200'}, function(r) {
    if(r.error) {
      return;
    } else {
      var user = r.response;
      callback(user[0]);
    }
  });
};

export const loadAudios = (offset, callback) => {
  VK.Api.call('audio.get', {count: 30, offset: offset, v: "5.60"}, function(r) {
    if(r.error) {
      return;
    }

    callback(r.response.items, r.response.count);
  });
};

export const loadRecommendations = (user_id, callback) => {
  VK.Api.call('audio.getRecommendations', {user_id: user_id, count: 30, v:"5.60"}, function(r) {
      if(r.error) {
        return;
      }

      callback(r.response.items);
  });
};

export const searchAudios = (query, callback) => {
  VK.Api.call('audio.search', {q: query}, function(r) {
    if(r.error) {
      return;
    }

    r.response.shift();
    callback(r.response);
  });
};
