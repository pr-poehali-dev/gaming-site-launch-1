import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularGames = [
    {
      title: "Cyberpunk Chronicles",
      genre: "RPG",
      rating: 9.2,
      image: "/img/0ac5bb84-5ad2-4f41-aa3e-7f93d5499ee6.jpg",
      description: "Погрузитесь в футуристический мир киберпанка с потрясающей графикой"
    },
    {
      title: "Fantasy Realm",
      genre: "Adventure",
      rating: 8.8,
      image: "/img/5c9d4b28-5449-40ea-beb4-37274f019eea.jpg",
      description: "Эпическое фэнтези приключение в магическом королевстве"
    },
    {
      title: "Modern Warfare Elite",
      genre: "Shooter",
      rating: 9.0,
      image: "/img/6f5a3971-5a62-4f12-8af5-7d565a53aa15.jpg",
      description: "Захватывающий тактический шутер с реалистичной графикой"
    }
  ];

  const genres = [
    { name: "RPG", icon: "User", count: 147, color: "bg-gaming-orange" },
    { name: "Shooter", icon: "Target", count: 89, color: "bg-gaming-blue" },
    { name: "Strategy", icon: "Brain", count: 62, color: "bg-gaming-charcoal" },
    { name: "Adventure", icon: "Map", count: 134, color: "bg-gaming-orange" },
    { name: "Sports", icon: "Trophy", count: 45, color: "bg-gaming-blue" },
    { name: "Racing", icon: "Car", count: 38, color: "bg-gaming-charcoal" }
  ];

  const news = [
    {
      title: "Новая эра виртуальной реальности",
      date: "15 августа 2025",
      excerpt: "Революционные VR-технологии меняют игровую индустрию..."
    },
    {
      title: "Обновление популярной MMORPG",
      date: "14 августа 2025", 
      excerpt: "Масштабное обновление добавляет новые локации..."
    },
    {
      title: "Анонс турнира по киберспорту",
      date: "13 августа 2025",
      excerpt: "Крупнейший турнир года с призовым фондом $2 млн..."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-charcoal via-slate-900 to-gaming-charcoal">
      {/* Header */}
      <header className="border-b border-slate-800 bg-gaming-charcoal/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-gaming-orange to-gaming-blue rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Gaming Portal</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Newspaper" size={16} className="mr-2" />
                  Новости
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Grid3X3" size={16} className="mr-2" />
                  Жанры
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Форум
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Контакты
                </Button>
              </nav>
            </div>
            <Button className="bg-gaming-orange hover:bg-gaming-orange/90">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Мир
              <span className="bg-gradient-to-r from-gaming-orange to-gaming-blue bg-clip-text text-transparent">
                {" "}Игр{" "}
              </span>
              Ждет Вас
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Откройте для себя лучшие игры, читайте обзоры, следите за новостями 
              и общайтесь с геймерским сообществом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Найти игру..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Button size="lg" className="bg-gaming-orange hover:bg-gaming-orange/90 px-8">
                Поиск
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Популярные игры</h3>
            <Button variant="outline" className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white">
              Смотреть все
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:scale-105 transition-all duration-300 animate-scale-in">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-gaming-blue text-white">
                    {game.genre}
                  </Badge>
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black/70 px-2 py-1 rounded">
                    <Icon name="Star" size={14} className="text-yellow-500" />
                    <span className="text-white text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{game.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-gaming-orange hover:bg-gaming-orange/90">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Игры по жанрам</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${genre.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={genre.icon as any} size={24} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{genre.name}</h4>
                  <p className="text-gray-400 text-sm">{genre.count} игр</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Последние новости</h3>
            <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white">
              Все новости
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.date}
                    </Badge>
                    <Icon name="ArrowRight" size={16} className="text-gaming-orange" />
                  </div>
                  <CardTitle className="text-white text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Preview */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Обсуждения</h3>
            <Button variant="outline" className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white">
              Перейти в форум
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gaming-blue rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-sm">Лучшие RPG 2025 года</CardTitle>
                    <CardDescription className="text-gray-400 text-xs">от GameMaster • 2 часа назад</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Какие RPG игры произвели на вас наибольшее впечатление в этом году?</p>
                <div className="flex items-center space-x-4 mt-3 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Icon name="MessageSquare" size={14} />
                    <span>24</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Heart" size={14} />
                    <span>15</span>
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gaming-orange rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-sm">Помощь новичкам в CS2</CardTitle>
                    <CardDescription className="text-gray-400 text-xs">от ProGamer • 4 часа назад</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Делюсь советами и стратегиями для начинающих игроков в Counter-Strike 2</p>
                <div className="flex items-center space-x-4 mt-3 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Icon name="MessageSquare" size={14} />
                    <span>18</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Heart" size={14} />
                    <span>22</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gaming-charcoal border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gaming-orange to-gaming-blue rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <h4 className="text-white font-bold text-lg">Gaming Portal</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Ваш главный источник игровых новостей, обзоров и сообщества геймеров.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Обзоры</a></li>
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Жанры</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Сообщество</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-gaming-orange transition-colors">Стримы</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>info@gamingportal.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MessageSquare" size={14} />
                  <span>Telegram: @gamingportal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} />
                  <span>24/7 Поддержка</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Gaming Portal. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gaming-orange">
                <Icon name="Github" size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gaming-orange">
                <Icon name="Twitter" size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gaming-orange">
                <Icon name="Youtube" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;