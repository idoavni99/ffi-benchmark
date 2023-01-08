#include <iostream>
#include <chrono>
#include <thread>

void sleep(int seconds)
{
    std::chrono::seconds dura(seconds);
    std::this_thread::sleep_for( dura );
}