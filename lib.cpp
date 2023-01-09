#include "lib.h"
#include <iostream>
#include <chrono>
#include <thread>

long sleep(long seconds)
{
    std::chrono::seconds dura(seconds);
    std::this_thread::sleep_for( dura );
    return seconds;
}