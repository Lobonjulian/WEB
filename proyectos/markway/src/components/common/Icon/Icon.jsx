import * as LucideIcons from 'lucide-react'
import styles from "./Icon.module.css";

const iconMap = {
  "📝": "FileText",
  "📊": "BarChart3",
  "📈": "TrendingUp",
  "🛠️": "Tool",
  "🪐": "Orbit",
  "📚": "BookOpen",
  "🔍": "Search",
  "🎨": "Palette",
  "💡": "Lightbulb",
  "📋": "ClipboardList",

  default: "FileText",
};

const Icon = ({ name, size = 24, color, className = "" }) => {
  const iconName = iconMap[name] || iconMap["default"];
  const LucideIcon = LucideIcons[iconName] || LucideIcons.FileText;

  return (
    <div className={`${styles.iconContainer} ${className}`}>
      <LucideIcon size={size} color={color} className={styles.icon} />
    </div>
  );
};

export default Icon;
