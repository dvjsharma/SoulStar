import redis

redis_client = redis.StrictRedis(host='localhost', port=6379, decode_responses=True)

def get_user_context(session_id):
    return redis_client.hgetall(f"user:{session_id}")

def set_user_context(session_id, key, value):
    redis_client.hset(f"user:{session_id}", key, value)

def get_suggestions(session_id):
    return redis_client.hgetall(f"suggestions:{session_id}")

def set_suggestions(session_id, suggestions):
    redis_client.hmset(f"suggestions:{session_id}", suggestions)
